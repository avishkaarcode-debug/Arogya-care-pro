import { CropSupportRequest, FarmerProfile, Language, SavedScan } from '../types/agritech';

const PROFILE_KEY = 'arogya_care_pro_profile_v1';
const SCANS_KEY = 'arogya_care_pro_scans_v1';
const CHECKLIST_KEY = 'arogya_care_pro_checklist_v1';
const CROP_REQUESTS_KEY = 'arogya_care_pro_crop_requests_v1';

export const DEFAULT_PROFILE: FarmerProfile = {
  name: 'Ramesh',
  language: 'en',
  regionNote: '',
};

export function formatLocalizedDate(isoString: string, language: Language, includeTime = false): string {
  const locale = language === 'te' ? 'te-IN' : language === 'hi' ? 'hi-IN' : 'en-IN';
  const date = new Date(isoString);
  if (includeTime) {
    return date.toLocaleString(locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function loadProfile(): FarmerProfile {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    if (!raw) return DEFAULT_PROFILE;
    const parsed = JSON.parse(raw) as Partial<FarmerProfile>;
    const lang: Language =
      parsed.language === 'te' || parsed.language === 'hi' || parsed.language === 'en'
        ? parsed.language
        : 'en';
    return {
      name: typeof parsed.name === 'string' && parsed.name.trim() ? parsed.name.trim() : DEFAULT_PROFILE.name,
      language: lang,
      regionNote: typeof parsed.regionNote === 'string' ? parsed.regionNote : '',
    };
  } catch {
    return DEFAULT_PROFILE;
  }
}

export function saveProfile(profile: FarmerProfile): void {
  try {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  } catch (err) {
    console.error('Failed to save profile to localStorage:', err);
  }
}

export function loadScans(): SavedScan[] {
  try {
    const raw = localStorage.getItem(SCANS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as SavedScan[]) : [];
  } catch {
    return [];
  }
}

export function saveScans(scans: SavedScan[]): void {
  try {
    localStorage.setItem(SCANS_KEY, JSON.stringify(scans));
  } catch (err) {
    console.error('Failed to save scans to localStorage:', err);
  }
}

export function loadChecklistState(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(CHECKLIST_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? (parsed as Record<string, boolean>) : {};
  } catch {
    return {};
  }
}

export function saveChecklistState(state: Record<string, boolean>): void {
  try {
    localStorage.setItem(CHECKLIST_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save checklist state:', err);
  }
}

export function loadCropRequests(): CropSupportRequest[] {
  try {
    const raw = localStorage.getItem(CROP_REQUESTS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as CropSupportRequest[]) : [];
  } catch {
    return [];
  }
}

export function saveCropRequest(request: CropSupportRequest): CropSupportRequest[] {
  const existing = loadCropRequests();
  const next = [request, ...existing].slice(0, 25);
  try {
    localStorage.setItem(CROP_REQUESTS_KEY, JSON.stringify(next));
  } catch (err) {
    console.error('Failed to save crop support request:', err);
  }
  return next;
}

export function clearAllLocalData(): void {
  localStorage.removeItem(PROFILE_KEY);
  localStorage.removeItem(SCANS_KEY);
  localStorage.removeItem(CHECKLIST_KEY);
  localStorage.removeItem(CROP_REQUESTS_KEY);
}

/**
 * Compresses an image data URL to a compact JPEG thumbnail (max 640px wide)
 * so saved scan history fits comfortably inside browser localStorage.
 */
export async function createCompactThumbnail(dataUrl: string, maxDimension = 640): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, maxDimension / Math.max(img.width, img.height));
      const width = Math.max(1, Math.round(img.width * scale));
      const height = Math.max(1, Math.round(img.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        resolve(dataUrl);
        return;
      }
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL('image/jpeg', 0.78));
    };
    img.onerror = () => resolve(dataUrl);
    img.src = dataUrl;
  });
}

export function createDemoScans(): SavedScan[] {
  const now = Date.now();
  const dayMs = 24 * 60 * 60 * 1000;

  const earlyBlightEn = {
    imageQuality: 'Clear daylight leaf framing with visible leaf texture.',
    symptomsObserved: [
      'Brown circular spots with concentric rings on older tomato foliage',
      'Slight yellowing around spot edges',
    ],
    likelyCause:
      'Common fungal spotting on mature lower tomato leaves, often encouraged by splashing soil moisture and warm humid mornings.',
    immediateActions: [
      'Remove heavily affected lower leaves carefully and keep them away from the field',
      'Avoid wet foliage; direct water toward the root zone only',
      'Improve airflow around plants with gentle staking',
      'Consult local agriculture guidance if spots move upward',
    ],
    preventionSteps: [
      'Use clean dry mulch under plants to block soil splash',
      'Rotate tomato plots with non-solanaceous crops next season',
      'Space plants evenly so morning dew dries faster',
    ],
    expertHelpAdvice:
      'Verify with a qualified agriculture officer if spotting spreads rapidly onto upper canopy leaves or stems.',
    disclaimer:
      'This screening is informational. Verify serious crop issues with a qualified agriculture expert.',
  };

  const leafCurlEn = {
    imageQuality: 'Good outdoor lighting showing young chili shoots.',
    symptomsObserved: [
      'Upward curling leaves on young chili shoots',
      'Compact, stunted shoot tips',
    ],
    likelyCause:
      'Often linked to sap-sucking pests such as whiteflies, thrips, or mites feeding on tender new growth.',
    immediateActions: [
      'Check undersides of leaves closely for tiny sap-sucking pests',
      'Isolate badly affected plants to protect neighboring chili plants',
      'Clear host weeds around field borders',
      'Consult local agriculture guidance for region-safe management',
    ],
    preventionSteps: [
      'Raise seedlings under fine insect-proof nursery netting',
      'Use yellow sticky monitoring cards to spot pests early',
      'Avoid excessive nitrogen flushing',
    ],
    expertHelpAdvice:
      'Seek local agriculture expert guidance promptly if curling spreads across newly transplanted plants.',
    disclaimer:
      'This screening is informational. Verify serious crop issues with a qualified agriculture expert.',
  };

  const leafMoldEn = {
    imageQuality: 'Sharp single-leaf view in clear outdoor shade light.',
    symptomsObserved: [
      'Faint pale-yellow patches on upper tomato leaf surface',
      'Early moisture stress signs under humid canopy',
    ],
    likelyCause:
      'Fungal leaf mold tends to develop in still, humid air when leaf surfaces remain damp overnight.',
    immediateActions: [
      'Improve ventilation between dense tomato rows',
      'Reduce leaf wetness by watering early morning at soil level',
      'Remove affected lower foliage carefully',
    ],
    preventionSteps: [
      'Maintain wider spacing in humid beds',
      'Clean stakes and trellises between crop cycles',
    ],
    expertHelpAdvice:
      'Consult a local horticulture officer if velvety olive-gray patches spread across multiple rows.',
    disclaimer:
      'This screening is informational. Verify serious crop issues with a qualified agriculture expert.',
  };

  return [
    {
      id: `demo-${now}-1`,
      createdAt: new Date(now - 1 * dayMs).toISOString(),
      crop: 'Tomato',
      leafAge: 'mature',
      visibleSymptom: 'spots',
      notes: 'Lower leaves near soil showed circular brown marks after morning watering.',
      imageDataUrl: '/src/assets/images/crop_tomato_healthy_1795764746610.jpg',
      languageAtScan: 'en',
      isDemo: true,
      result: {
        possibleDisease: 'Early Blight',
        confidence: 78,
        severity: 'Medium',
        ...earlyBlightEn,
      },
      translations: {
        en: earlyBlightEn,
        te: {
          imageQuality: 'ఆకు ఆకృతి స్పష్టంగా కనిపించేలా పగటి వెలుతురులో తీసిన ఫోటో.',
          symptomsObserved: [
            'ముదిరిన టమాటా కింది ఆకులపై వలయాలతో కూడిన గోధుమ రంగు గుండ్రని మచ్చలు',
            'మచ్చల అంచుల చుట్టూ స్వల్ప పసుపు రంగు',
          ],
          likelyCause:
            'తడి మట్టి తుంపర్లు మరియు వెచ్చని తేమ ఉదయాల వల్ల కింది టమాటా ఆకులపై ఏర్పడే సాధారణ శిలీంధ్ర మచ్చలు.',
          immediateActions: [
            'ఎక్కువగా దెబ్బతిన్న కింది ఆకులను జాగ్రత్తగా తీసి పొలం నుండి దూరంగా వేయండి',
            'ఆకులు తడవకుండా మొక్క మొదట్లో మాత్రమే నీరు పెట్టండి',
            'కర్ర ఆధారం ఇచ్చి మొక్కల చుట్టూ గాలి ఆడేలా చూడండి',
            'మచ్చలు పై ఆకులకు వ్యాపిస్తే స్థానిక వ్యవసాయ సలహా తీసుకోండి',
          ],
          preventionSteps: [
            'మట్టి తుంపర్లు పడకుండా మొక్కల కింద ఎండు మల్చింగ్ వాడండి',
            'తదుపరి సీజన్‌లో టమాటాతో కాకుండా ఇతర పంటలతో మార్పిడి చేయండి',
            'ఉదయం మంచు త్వరగా ఆరేలా మొక్కల మధ్య సరైన దూరం ఉంచండి',
          ],
          expertHelpAdvice:
            'మచ్చలు పై ఆకులకు లేదా కాండానికి వేగంగా వ్యాపిస్తే అర్హత కలిగిన వ్యవసాయ అధికారిని సంప్రదించండి.',
          disclaimer:
            'ఈ స్క్రీనింగ్ సమాచారం కోసం మాత్రమే. తీవ్రమైన పంట సమస్యలను అర్హత కలిగిన వ్యవసాయ నిపుణులతో నిర్ధారించుకోండి.',
        },
        hi: {
          imageQuality: 'दिन की रोशनी में ली गई साफ फोटो जिसमें पत्ते की सतह स्पष्ट दिख रही है।',
          symptomsObserved: [
            'टमाटर के पुराने निचले पत्तों पर छल्लेदार गोल भूरे धब्बे',
            'धब्बों के किनारों पर हल्का पीलापन',
          ],
          likelyCause:
            'मिट्टी के छींटों और गर्म-नम सुबह के कारण निचले पत्तों पर बनने वाले सामान्य फफूंद धब्बे।',
          immediateActions: [
            'अधिक प्रभावित निचले पत्तों को सावधानी से तोड़कर खेत से दूर हटाएं',
            'पत्तों को गीला न करें; केवल जड़ के पास सिंचाई करें',
            'हल्का सहारा देकर पौधों के बीच हवा का बहाव बढ़ाएं',
            'धब्बे ऊपर की ओर बढ़ें तो स्थानीय कृषि विशेषज्ञ से सलाह लें',
          ],
          preventionSteps: [
            'मिट्टी के छींटे रोकने के लिए पौधों के नीचे सूखी मल्च बिछाएं',
            'अगले मौसम में टमाटर के अलावा दूसरी फसल से फसल चक्र करें',
            'पौधों में उचित दूरी रखें ताकि सुबह की ओस जल्दी सूख जाए',
          ],
          expertHelpAdvice:
            'यदि धब्बे ऊपरी पत्तों या तने पर तेजी से फैलें तो योग्य कृषि अधिकारी से जांच कराएं।',
          disclaimer:
            'यह जांच केवल जानकारी के लिए है। गंभीर फसल समस्याओं की पुष्टि योग्य कृषि विशेषज्ञ से अवश्य कराएं।',
        },
      },
    },
    {
      id: `demo-${now}-2`,
      createdAt: new Date(now - 5 * dayMs).toISOString(),
      crop: 'Chili',
      leafAge: 'young',
      visibleSymptom: 'curling',
      notes: 'New top shoots on three chili plants looked curled upward.',
      imageDataUrl: '/src/assets/images/crop_chili_healthy_1795764748263.jpg',
      languageAtScan: 'en',
      isDemo: true,
      result: {
        possibleDisease: 'Leaf Curl',
        confidence: 72,
        severity: 'High',
        ...leafCurlEn,
      },
      translations: {
        en: leafCurlEn,
        te: {
          imageQuality: 'లేత మిరప చిగుర్లను స్పష్టంగా చూపే మంచి పగటి వెలుతురు ఫోటో.',
          symptomsObserved: [
            'లేత మిరప చిగుర్ల ఆకులు పైకి ముడుచుకోవడం',
            'చిగుర్ల పెరుగుదల ఆగిపోయి కుదించుకుపోవడం',
          ],
          likelyCause:
            'లేత ఆకులపై రసం పీల్చే తెల్లదోమ, తామర పురుగులు లేదా నల్లి వంటి కీటకాల ప్రభావంతో ఇది తరచుగా వస్తుంది.',
          immediateActions: [
            'ఆకుల అడుగు భాగంలో చిన్న రసం పీల్చే పురుగులు ఉన్నాయో జాగ్రత్తగా చూడండి',
            'పక్క మిరప మొక్కలను కాపాడటానికి తీవ్రంగా దెబ్బతిన్న మొక్కలను వేరు చేయండి',
            'పొలం గట్ల చుట్టూ కలుపు మొక్కలను శుభ్రం చేయండి',
            'సురక్షిత నియంత్రణ కోసం స్థానిక వ్యవసాయ సలహా తీసుకోండి',
          ],
          preventionSteps: [
            'నారుమడిని సన్నని పురుగుల వల కింద పెంచండి',
            'పురుగులను ముందే గుర్తించడానికి పసుపు జిగురు అట్టలు వాడండి',
            'అధిక నత్రజని ఎరువు వాడకాన్ని నివారించండి',
          ],
          expertHelpAdvice:
            'కొత్తగా నాటిన మొక్కలలో ముడత వేగంగా వ్యాపిస్తే వెంటనే వ్యవసాయ నిపుణులను సంప్రదించండి.',
          disclaimer:
            'ఈ స్క్రీనింగ్ సమాచారం కోసం మాత్రమే. తీవ్రమైన పంట సమస్యలను అర్హత కలిగిన వ్యవసాయ నిపుణులతో నిర్ధారించుకోండి.',
        },
        hi: {
          imageQuality: 'बाहरी रोशनी में ली गई अच्छी फोटो जिसमें मिर्च की नई कोपलें दिख रही हैं।',
          symptomsObserved: [
            'मिर्च की नई कोपलों के पत्तों का ऊपर की ओर मुड़ना',
            'पौधे के ऊपरी हिस्से की बढ़वार रुक जाना',
          ],
          likelyCause:
            'अक्सर सफेद मक्खी, थ्रिप्स या माइट्स जैसे रस चूसने वाले कीटों के कारण नई पत्तियों में यह समस्या दिखती है।',
          immediateActions: [
            'पत्तों की निचली सतह पर छोटे रस चूसने वाले कीटों की बारीकी से जांच करें',
            'पास के स्वस्थ पौधों को बचाने के लिए बहुत प्रभावित पौधों को अलग करें',
            'खेत की मेड़ों के आसपास से खरपतवार हटाएं',
            'सुरक्षित नियंत्रण के लिए स्थानीय कृषि मार्गदर्शन लें',
          ],
          preventionSteps: [
            'नर्सरी के पौधे बारीक कीट-रोधी जाली के नीचे तैयार करें',
            'कीटों की शुरुआती निगरानी के लिए पीले चिपचिपे कार्ड लगाएं',
            'अत्यधिक नाइट्रोजन खाद डालने से बचें',
          ],
          expertHelpAdvice:
            'यदि नई रोपी गई फसल में पत्तियों का मुड़ना तेजी से फैले तो तुरंत कृषि विशेषज्ञ से सलाह लें।',
          disclaimer:
            'यह जांच केवल जानकारी के लिए है। गंभीर फसल समस्याओं की पुष्टि योग्य कृषि विशेषज्ञ से अवश्य कराएं।',
        },
      },
    },
    {
      id: `demo-${now}-3`,
      createdAt: new Date(now - 10 * dayMs).toISOString(),
      crop: 'Tomato',
      leafAge: 'mature',
      visibleSymptom: 'yellowing',
      notes: 'Routine check inside shade-net tomato row.',
      imageDataUrl: '/src/assets/images/scan_good_example_1795764748440.jpg',
      languageAtScan: 'en',
      isDemo: true,
      result: {
        possibleDisease: 'Leaf Mold',
        confidence: 64,
        severity: 'Low',
        ...leafMoldEn,
      },
      translations: {
        en: leafMoldEn,
        te: {
          imageQuality: 'బయటి నీడ వెలుతురులో ఒకే ఆకును స్పష్టంగా చూపే ఫోటో.',
          symptomsObserved: [
            'టమాటా ఆకు పైభాగంలో లేత పసుపు రంగు మచ్చలు',
            'తేమ ఎక్కువగా ఉండే పరిస్థితుల్లో ప్రాథమిక ఒత్తిడి లక్షణాలు',
          ],
          likelyCause:
            'గాలి తక్కువగా ఉండి రాత్రిపూట ఆకులపై తేమ నిలిచినప్పుడు ఆకు బూజు ఏర్పడుతుంది.',
          immediateActions: [
            'దట్టమైన టమాటా వరుసల మధ్య గాలి ప్రసరణను పెంచండి',
            'ఉదయం వేళ మొక్క మొదట్లో నీరు పెట్టి ఆకులపై తడిని తగ్గించండి',
            'దెబ్బతిన్న కింది ఆకులను జాగ్రత్తగా తీసివేయండి',
          ],
          preventionSteps: [
            'తేమ ఉన్న మడులలో మొక్కల మధ్య దూరం పెంచండి',
            'పంటల మధ్య కర్రలు మరియు తీగలను శుభ్రం చేయండి',
          ],
          expertHelpAdvice:
            'ఆకు కింద ఆలివ్-బూడిద పొర ఎక్కువ వరుసలకు వ్యాపిస్తే ఉద్యానవన అధికారిని సంప్రదించండి.',
          disclaimer:
            'ఈ స్క్రీనింగ్ సమాచారం కోసం మాత్రమే. తీవ్రమైన పంట సమస్యలను అర్హత కలిగిన వ్యవసాయ నిపుణులతో నిర్ధారించుకోండి.',
        },
        hi: {
          imageQuality: 'साफ छायादार रोशनी में एक पत्ते की स्पष्ट फोटो।',
          symptomsObserved: [
            'टमाटर के पत्ते की ऊपरी सतह पर हल्के पीले धब्बे',
            'अधिक नमी वाले वातावरण में शुरुआती तनाव के संकेत',
          ],
          likelyCause:
            'शांत और नम हवा में रात भर पत्तों पर नमी बने रहने से पत्ती का फफूंद रोग पनपता है।',
          immediateActions: [
            'घनी टमाटर की कतारों के बीच हवा का बहाव बढ़ाएं',
            'सुबह जड़ के पास सिंचाई करके पत्तों की नमी कम रखें',
            'प्रभावित निचले पत्तों को सावधानी से हटा दें',
          ],
          preventionSteps: [
            'नमी वाली क्यारियों में पौधों के बीच अधिक दूरी रखें',
            'फसल चक्र के बीच सहारे के डंडों को साफ करें',
          ],
          expertHelpAdvice:
            'यदि कई कतारों में पत्तों के नीचे मखमली जैतूनी-भूरी परत दिखे तो बागवानी अधिकारी से सलाह लें।',
          disclaimer:
            'यह जांच केवल जानकारी के लिए है। गंभीर फसल समस्याओं की पुष्टि योग्य कृषि विशेषज्ञ से अवश्य कराएं।',
        },
      },
    },
  ];
}
