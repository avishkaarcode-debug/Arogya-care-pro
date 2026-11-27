import { CropType, DiseaseGuide, Language, SeasonalChecklistItem, SupportedDisease } from '../types/agritech';

export const DISEASE_GUIDES: DiseaseGuide[] = [
  // =========================================================================
  // 1. TOMATO
  // =========================================================================
  {
    id: 'Early Blight',
    crop: 'Tomato',
    name: {
      en: 'Early Blight',
      te: 'ముందస్తు ఆకు మచ్చ తెగులు (Early Blight)',
      hi: 'अगेती झुलसा रोग (Early Blight)',
    },
    summary: {
      en: 'Brown circular spots with concentric target-like rings, usually starting on older lower tomato leaves.',
      te: 'టమాటా మొక్కల కింది పాత ఆకులపై వలయాల ఆకారంలో గోధుమ రంగు గుండ్రని మచ్చలు కనిపిస్తాయి.',
      hi: 'टमाटर के निचले और पुराने पत्तों पर गोल भूरे धब्बे बनते हैं जिनमें छल्ले जैसे घेरे दिखते हैं।',
    },
    simpleSummary: {
      en: 'Round brown spots with rings on older tomato leaves.',
      te: 'పాత టమాటా ఆకులపై వలయాలతో కూడిన గోధుమ మచ్చలు.',
      hi: 'टमाटर के पुराने पत्तों पर छल्लेदार गोल भूरे धब्बे।',
    },
    symptoms: {
      en: [
        'Brown circular spots with concentric rings on older lower leaves',
        'Yellow halo often surrounds darker spots',
        'Affected leaves dry up and drop prematurely from the base upward',
      ],
      te: [
        'కింది పాత ఆకులపై వలయాలతో కూడిన గోధుమ రంగు గుండ్రని మచ్చలు',
        'మచ్చల చుట్టూ పసుపు రంగు అంచు కనిపించవచ్చు',
        'కింది ఆకులు ఎండి రాలిపోవడం మొదలవుతుంది',
      ],
      hi: [
        'निचले पुराने पत्तों पर छल्ले जैसे घेरों वाले गोल भूरे धब्बे',
        'धब्बों के चारों ओर पीला घेरा दिख सकता है',
        'नीचे के पत्ते सूखकर समय से पहले गिरने लगते हैं',
      ],
    },
    simpleSymptoms: {
      en: [
        'Brown round spots with rings',
        'Yellow ring around spots',
        'Lower leaves turn dry and drop',
      ],
      te: [
        'వలయాలతో గోధుమ మచ్చలు',
        'మచ్చల చుట్టూ పసుపు రంగు',
        'కింది ఆకులు ఎండి రాలిపోతాయి',
      ],
      hi: [
        'छल्ले वाले भूरे गोल धब्बे',
        'धब्बों के बाहर पीलापन',
        'नीचे के पत्ते सूखकर गिरते हैं',
      ],
    },
    likelyCause: {
      en: 'Common fungal leaf spotting encouraged by warm humid mornings, overhead splashing soil water, and lingering crop debris.',
      te: 'వెచ్చని తేమ ఉదయాలు, మట్టి నీటి తుంపర్లు ఆకులపై పడటం మరియు పాత పంట అవశేషాల వల్ల ఈ శిలీంధ్ర మచ్చలు పెరుగుతాయి.',
      hi: 'गर्म-नम सुबह, सिंचाई या बारिश से मिट्टी के छींटे पत्तों पर पड़ने और पुराने फसल अवशेषों के कारण यह फफूंद रोग बढ़ता है।',
    },
    simpleLikelyCause: {
      en: 'Caused by fungus spreading when wet soil splashes onto warm, damp lower leaves.',
      te: 'తడి మట్టి తుంపర్లు వెచ్చని కింది ఆకులపై పడటం వల్ల వచ్చే శిలీంధ్రం.',
      hi: 'गीली मिट्टी के छींटे और नमी से पत्तों पर फफूंद फैलती है।',
    },
    safeActions: {
      en: [
        'Remove heavily affected lower leaves carefully and keep them away from the field',
        'Avoid wetting leaves during irrigation; water near the soil base instead',
        'Improve airflow around plants by gentle staking and light pruning',
        'Consult local agriculture guidance if spots spread rapidly to upper leaves',
      ],
      te: [
        'ఎక్కువగా దెబ్బతిన్న కింది ఆకులను జాగ్రత్తగా తీసి పొలం నుండి దూరంగా వేయండి',
        'ఆకులపై నీరు పడకుండా మొక్క మొదట్లో మాత్రమే నీరు పెట్టండి',
        'మొక్కలకు కర్ర ఆధారం ఇచ్చి గాలి బాగా ఆడేలా చూడండి',
        'పై ఆకులకు వేగంగా వ్యాపిస్తే స్థానిక వ్యవసాయ అధికారి సలహా తీసుకోండి',
      ],
      hi: [
        'अधिक प्रभावित निचले पत्तों को सावधानी से हटाकर खेत से दूर नष्ट करें',
        'पत्तों को गीला करने से बचें; सिंचाई पौधे की जड़ के पास करें',
        'सहारा देकर और हल्की छंटाई से पौधों के बीच हवा का बहाव बढ़ाएं',
        'ऊपरी पत्तों तक तेजी से फैलने पर स्थानीय कृषि विशेषज्ञ से सलाह लें',
      ],
    },
    simpleSafeActions: {
      en: [
        'Pluck badly spotted lower leaves',
        'Water soil base, keep leaves dry',
        'Give plants more air space',
        'Ask local agriculture officer if spreading',
      ],
      te: [
        'మచ్చలు ఎక్కువగా ఉన్న కింది ఆకులు తీసేయండి',
        'ఆకులు తడవకుండా మొదట్లో నీరు పోయండి',
        'మొక్కల మధ్య గాలి ఆడేలా చూడండి',
        'వ్యాప్తి పెరిగితే వ్యవసాయ నిపుణుడిని అడగండి',
      ],
      hi: [
        'खराब निचले पत्ते तोड़कर हटाएं',
        'पत्तों पर पानी न डालें, जड़ में सिंचाई करें',
        'पौधों में हवा लगने की जगह रखें',
        'फैलने पर कृषि अधिकारी से पूछें',
      ],
    },
    prevention: {
      en: [
        'Rotate tomato crops with non-solanaceous crops in the next season',
        'Use clean mulch to reduce soil splashing onto lower leaves',
        'Space plants adequately so morning dew dries quickly',
      ],
      te: [
        'తదుపరి సీజన్‌లో టమాటాతో కాకుండా వేరే పంట మార్పిడి చేయండి',
        'మట్టి నీటి తుంపర్లు ఆకులపై పడకుండా మల్చింగ్ వాడండి',
        'ఉదయం మంచు త్వరగా ఆరేలా మొక్కల మధ్య సరైన దూరం ఉంచండి',
      ],
      hi: [
        'अगले मौसम में टमाटर की जगह दूसरी फसल से फसल चक्र अपनाएं',
        'मिट्टी के छींटे पत्तों पर न पड़ें इसके लिए मल्चिंग का उपयोग करें',
        'पौधों के बीच उचित दूरी रखें ताकि सुबह की ओस जल्दी सूखे',
      ],
    },
    simplePrevention: {
      en: [
        'Change crop type next season',
        'Cover soil with dry mulch',
        'Leave space between plants',
      ],
      te: [
        'వచ్చే సీజన్‌లో పంట మార్పిడి చేయండి',
        'మొక్కల మొదట్లో ఎండు మల్చింగ్ వేయండి',
        'మొక్కల మధ్య ఖాళీ ఉంచండి',
      ],
      hi: [
        'अगली बार दूसरी फसल लगाएं',
        'मिट्टी पर सूखी पलवार (मल्च) बिछाएं',
        'पौधों को दूर-दूर लगाएं',
      ],
    },
    whenToSeekHelp: {
      en: 'Seek qualified agriculture advice if lesions spread above the middle canopy, affect stems, or threaten flowering and fruit set.',
      te: 'మచ్చలు మొక్క మధ్య భాగం దాటి పై ఆకులకు, కాండానికి వ్యాపించినా లేదా పూత, పిందె దశలో నష్టం కనిపించినా వెంటనే వ్యవసాయ నిపుణులను సంప్రదించండి.',
      hi: 'यदि धब्बे पौधे के ऊपरी हिस्से और तने तक फैल जाएं या फूल-फल बनने पर असर पड़े, तो तुरंत योग्य कृषि विशेषज्ञ से सलाह लें।',
    },
    simpleWhenToSeekHelp: {
      en: 'Get expert help if spots reach top leaves or stems.',
      te: 'మచ్చలు పై ఆకులు లేదా కాండానికి వస్తే నిపుణులను కలవండి.',
      hi: 'धब्बे ऊपर के पत्तों या तने पर जाएं तो विशेषज्ञ से मिलें।',
    },
  },
  {
    id: 'Late Blight',
    crop: 'Tomato',
    name: {
      en: 'Late Blight',
      te: 'ఆలస్య ఆకు మాడు తెగులు (Late Blight)',
      hi: 'पछेती झुलसा रोग (Late Blight)',
    },
    summary: {
      en: 'Dark water-soaked patches on tomato leaves and stems that spread rapidly in cool, damp, or cloudy weather.',
      te: 'చల్లని, తేమ లేదా మబ్బు వాతావరణంలో వేగంగా వ్యాపించే నీటిలో నానినట్లుండే నల్లని మచ్చలు ఆకులు, కాండంపై ఏర్పడతాయి.',
      hi: 'ठंडे और नम मौसम में टमाटर के पत्तों और तनों पर पानी से भीगे गहरे धब्बे बनते हैं जो बहुत तेजी से फैलते हैं।',
    },
    simpleSummary: {
      en: 'Dark wet-looking patches that spread fast in cool damp weather.',
      te: 'తేమ వాతావరణంలో వేగంగా పెరిగే నల్లని తడి మచ్చలు.',
      hi: 'ठंड व नमी में तेजी से फैलने वाले गहरे गीले धब्बे।',
    },
    symptoms: {
      en: [
        'Dark water-soaked patches that spread rapidly',
        'Pale green or grayish fuzzy edge on the underside in humid mornings',
        'Darkening of stems and firm brown patches on green fruits',
      ],
      te: [
        'వేగంగా వ్యాపించే నల్లని నీటి-నానిన మచ్చలు',
        'ఉదయం తేమలో ఆకు అడుగున బూడిద లేదా తెల్లటి పొర కనిపించవచ్చు',
        'కాండం నల్లబడి కాయలపై గట్టి గోధుమ మచ్చలు రావచ్చు',
      ],
      hi: [
        'तेजी से फैलने वाले गहरे पानी से भीगे धब्बे',
        'नमी में पत्तों के नीचे हल्की सफेद या भूरी रूई जैसी परत',
        'तनों का काला पड़ना और कच्चे फलों पर सख्त भूरे धब्बे',
      ],
    },
    simpleSymptoms: {
      en: [
        'Dark wet patches growing quickly',
        'Faint gray fuzz under leaves',
        'Dark marks on stems',
      ],
      te: [
        'వేగంగా పెరిగే నల్లని తడి మచ్చలు',
        'ఆకు కింద బూడిద రంగు పొర',
        'కాండంపై నల్లని మచ్చలు',
      ],
      hi: [
        'तेजी से बढ़ते गहरे गीले धब्बे',
        'पत्ते के नीचे हल्की भूरी परत',
        'तने पर काले निशान',
      ],
    },
    likelyCause: {
      en: 'Fast-spreading water-mold infection triggered by cool temperatures, prolonged rain, fog, or heavy overnight dew.',
      te: 'చల్లని వాతావరణం, ఎడతెరిపి లేని వర్షాలు, పొగమంచు లేదా రాత్రిపూట ఎక్కువ మంచు వల్ల ఈ తెగులు వేగంగా వ్యాపిస్తుంది.',
      hi: 'ठंडे तापमान, लगातार बारिश, कोहरे या रात की भारी ओस के कारण यह जल-फफूंद (ओओमाइसीट) तेजी से फैलती है।',
    },
    simpleLikelyCause: {
      en: 'Spreads rapidly in cool, wet, cloudy, or foggy weather.',
      te: 'చల్లని, వర్షపు లేదా పొగమంచు వాతావరణంలో వేగంగా వ్యాపిస్తుంది.',
      hi: 'ठंडे, गीले और बादल वाले मौसम में बहुत तेजी से फैलता है।',
    },
    safeActions: {
      en: [
        'Isolate or carefully remove badly affected plants so nearby healthy plants are protected',
        'Avoid overhead watering completely; keep foliage as dry as possible',
        'Monitor neighboring tomato plants closely morning and evening',
        'Seek local agriculture expert advice promptly because spread can be very fast',
      ],
      te: [
        'పక్కన ఉన్న ఆరోగ్యకరమైన మొక్కలను కాపాడటానికి తీవ్రంగా దెబ్బతిన్న మొక్కలను వేరు చేయండి',
        'పై నుండి నీరు చల్లడం పూర్తిగా ఆపివేయండి; ఆకులు తడవకుండా చూడండి',
        'పక్కనున్న టమాటా మొక్కలను ఉదయం, సాయంత్రం జాగ్రత్తగా పరిశీలించండి',
        'ఇది వేగంగా వ్యాపిస్తుంది కాబట్టి వెంటనే స్థానిక వ్యవసాయ నిపుణుల సలహా తీసుకోండి',
      ],
      hi: [
        'पास के स्वस्थ पौधों को बचाने के लिए गंभीर रूप से प्रभावित पौधों को अलग करें',
        'ऊपर से छिड़काव वाली सिंचाई तुरंत बंद करें; पत्तों को सूखा रखें',
        'आस-पास के टमाटर के पौधों की सुबह-शाम नियमित जांच करें',
        'यह तेजी से फैलता है, इसलिए तुरंत स्थानीय कृषि विशेषज्ञ की सलाह लें',
      ],
    },
    simpleSafeActions: {
      en: [
        'Separate badly affected plants',
        'Stop wetting leaves from above',
        'Check nearby plants daily',
        'Contact local expert quickly',
      ],
      te: [
        'బాగా పాడైన మొక్కలను వేరు చేయండి',
        'పై నుండి నీరు చల్లడం ఆపండి',
        'పక్క మొక్కలను రోజూ చూడండి',
        'వెంటనే వ్యవసాయ నిపుణులను అడగండి',
      ],
      hi: [
        'खराब पौधों को अलग करें',
        'पत्तों पर ऊपर से पानी न डालें',
        'पास के पौधों की रोज जांच करें',
        'तुरंत कृषि विशेषज्ञ से संपर्क करें',
      ],
    },
    prevention: {
      en: [
        'Avoid planting tomatoes in low-lying waterlogged plots',
        'Ensure wide row spacing and good drainage during rainy or cool spells',
        'Clear crop residues completely after harvest',
      ],
      te: [
        'నీరు నిలిచే లోతట్టు ప్రాంతాల్లో టమాటా నాటడం నివారించండి',
        'వర్షాకాలం లేదా చలికాలంలో వరుసల మధ్య మంచి దూరం, నీటి పారుదల ఉండేలా చూడండి',
        'పంట పూర్తయిన తర్వాత మొక్కల అవశేషాలను పూర్తిగా తొలగించండి',
      ],
      hi: [
        'जलभराव वाले निचले खेतों में टमाटर लगाने से बचें',
        'बरसात या ठंड के मौसम में कतारों के बीच अच्छी दूरी और जल निकासी रखें',
        'कटाई के बाद फसल के अवशेष खेत से पूरी तरह साफ करें',
      ],
    },
    simplePrevention: {
      en: [
        'Ensure good soil drainage',
        'Leave wide space between rows',
        'Clear old plant debris after harvest',
      ],
      te: [
        'పొలంలో నీరు నిలవకుండా చూడండి',
        'వరుసల మధ్య ఎక్కువ దూరం ఉంచండి',
        'పంట తర్వాత పాత ఆకులు శుభ్రం చేయండి',
      ],
      hi: [
        'खेत में पानी न रुकने दें',
        'कतारों में खुली जगह रखें',
        'कटाई के बाद पुराने पौधे हटाएं',
      ],
    },
    whenToSeekHelp: {
      en: 'Seek urgent local agriculture expert guidance as soon as water-soaked dark patches appear on multiple plants during humid or rainy weather.',
      te: 'వర్షం లేదా తేమ వాతావరణంలో ఎక్కువ మొక్కలపై నల్లని తడి మచ్చలు కనిపించిన వెంటనే ఆలస్యం చేయకుండా వ్యవసాయ అధికారి సలహా తీసుకోండి.',
      hi: 'नमी या बारिश के मौसम में कई पौधों पर गहरे गीले धब्बे दिखते ही बिना देरी किए कृषि विशेषज्ञ से मदद लें।',
    },
    simpleWhenToSeekHelp: {
      en: 'Call an agriculture expert immediately if several plants show dark wet spots.',
      te: 'చాలా మొక్కలపై నల్ల తడి మచ్చలు కనిపిస్తే వెంటనే నిపుణులను పిలవండి.',
      hi: 'कई पौधों पर गहरे गीले धब्बे दिखें तो तुरंत विशेषज्ञ से मिलें।',
    },
  },
  {
    id: 'Leaf Mold',
    crop: 'Tomato',
    name: {
      en: 'Leaf Mold',
      te: 'ఆకు బూజు తెగులు (Leaf Mold)',
      hi: 'पत्ती का फफूंद रोग (Leaf Mold)',
    },
    summary: {
      en: 'Pale yellow patches on the upper tomato leaf surface with olive-green or gray velvety mold underneath.',
      te: 'ఆకు పైభాగంలో పసుపు మచ్చలు మరియు ఆకు అడుగున ఆలివ్ ఆకుపచ్చ లేదా బూడిద రంగు బూజు పొర కనిపిస్తుంది.',
      hi: 'टमाटर के पत्ते के ऊपरी हिस्से पर पीले धब्बे और निचली सतह पर जैतूनी या भूरी मखमली फफूंद दिखाई देती है।',
    },
    simpleSummary: {
      en: 'Yellow spots on top of leaf with olive-gray fuzz underneath.',
      te: 'ఆకు పైన పసుపు మచ్చలు, కింద ఆలివ్-బూడిద బూజు.',
      hi: 'पत्ते के ऊपर पीले धब्बे और नीचे मटमैली फफूंद।',
    },
    symptoms: {
      en: [
        'Yellow patches on upper leaf surface with indistinct edges',
        'Olive-green or gray velvety mold beneath affected leaves',
        'Leaves curl slightly, wither, and drop in high humidity',
      ],
      te: [
        'ఆకు పైభాగంలో పసుపు మచ్చలు ఏర్పడటం',
        'ఆకు అడుగు భాగంలో ఆలివ్ లేదా బూడిద రంగు బూజు',
        'అధిక తేమలో ఆకులు ముడుచుకుని ఎండిపోతాయి',
      ],
      hi: [
        'पत्ते की ऊपरी सतह पर हल्के पीले धब्बे',
        'धब्बों के ठीक नीचे जैतूनी या भूरे रंग की मखमली फफूंद',
        'अधिक नमी में पत्ते मुड़कर सूखने लगते हैं',
      ],
    },
    simpleSymptoms: {
      en: [
        'Yellow patches on top of leaves',
        'Olive or gray fuzz on leaf underside',
        'Leaves curl and dry in damp air',
      ],
      te: [
        'ఆకు పైన పసుపు మచ్చలు',
        'ఆకు కింద ఆలివ్ లేదా బూడిద బూజు',
        'తేమ ఎక్కువైతే ఆకులు ఎండిపోతాయి',
      ],
      hi: [
        'पत्ते के ऊपर पीले धब्बे',
        'पत्ते के नीचे भूरी-हरी फफूंद',
        'नमी में पत्ते सूखने लगते हैं',
      ],
    },
    likelyCause: {
      en: 'Fungal mold that thrives in stagnant, high-humidity air—often inside shade nets, polyhouses, or tightly spaced rows.',
      te: 'గాలి తక్కువగా ఉండి తేమ ఎక్కువగా ఉండే షేడ్ నెట్‌లు, పాలీహౌస్‌లు లేదా దట్టమైన వరుసలలో ఈ ఆకు బూజు పెరుగుతుంది.',
      hi: 'शेड नेट, पॉलीहाउस या घनी कतारों में रुकी हुई नम हवा के कारण यह पत्ती फफूंद पनपती है।',
    },
    simpleLikelyCause: {
      en: 'Develops when air is still and humidity stays high around leaves.',
      te: 'గాలి ఆడక ఆకుల చుట్టూ తేమ ఎక్కువగా ఉన్నప్పుడు వస్తుంది.',
      hi: 'हवा न चलने और लगातार अधिक नमी रहने पर होता है।',
    },
    safeActions: {
      en: [
        'Improve ventilation, especially in polyhouses, shade nets, or dense rows',
        'Reduce leaf wetness by watering early in the morning at soil level',
        'Remove affected lower foliage gently without shaking spores onto healthy plants',
      ],
      te: [
        'పాలీహౌస్ లేదా దట్టమైన వరుసలలో గాలి బాగా ఆడేలా వెంటిలేషన్ పెంచండి',
        'ఉదయాన్నే మొక్క మొదట్లో నీరు పెట్టి ఆకులపై తడి తగ్గించండి',
        'బూజు పట్టిన ఆకులను ఇతర మొక్కలకు తగలకుండా జాగ్రత్తగా తీసివేయండి',
      ],
      hi: [
        'पॉलीहाउस या घनी कतारों में हवा के आवागमन को बढ़ाएं',
        'सुबह के समय जड़ के पास सिंचाई करें ताकि पत्तों पर नमी कम रहे',
        'प्रभावित निचले पत्तों को बिना झटका दिए सावधानी से हटाएं',
      ],
    },
    simpleSafeActions: {
      en: [
        'Open vents or trim side shoots for air',
        'Water early morning at roots',
        'Gently remove moldy leaves',
      ],
      te: [
        'మొక్కల చుట్టూ గాలి ఆడేలా చూడండి',
        'ఉదయం వేళ మొదట్లో మాత్రమే నీరు పెట్టండి',
        'బూజు ఉన్న ఆకులను మెల్లగా తీసేయండి',
      ],
      hi: [
        'हवा आने-जाने का रास्ता खोलें',
        'सुबह जड़ के पास पानी दें',
        'फफूंद वाले पत्ते धीरे से हटाएं',
      ],
    },
    prevention: {
      en: [
        'Avoid overcrowding tomato plants in humid growing areas',
        'Sanitize greenhouse or nursery stakes and trellises between cycles',
        'Water early so excess moisture evaporates before evening',
      ],
      te: [
        'తేమ ఎక్కువగా ఉండే చోట్ల టమాటా మొక్కలను చాలా దగ్గరగా నాటకండి',
        'పంటల మధ్య నర్సరీ కర్రలు, తీగలను శుభ్రం చేయండి',
        'సాయంత్రానికి తేమ ఆరిపోయేలా ఉదయాన్నే నీరు పెట్టండి',
      ],
      hi: [
        'अधिक नमी वाले क्षेत्रों में पौधों को बहुत पास-पास न लगाएं',
        'अगली फसल से पहले नर्सरी और सहारे के डंडों को साफ करें',
        'सुबह सिंचाई करें ताकि शाम से पहले नमी सूख जाए',
      ],
    },
    simplePrevention: {
      en: [
        'Do not plant too closely',
        'Clean stakes before next crop',
        'Avoid evening watering',
      ],
      te: [
        'మొక్కలను దగ్గరగా నాటకండి',
        'కర్రలను శుభ్రం చేసి వాడండి',
        'సాయంత్రం నీరు పెట్టకండి',
      ],
      hi: [
        'पौधों में दूरी रखें',
        'डंडे साफ करके इस्तेमाल करें',
        'शाम को सिंचाई न करें',
      ],
    },
    whenToSeekHelp: {
      en: 'Consult a horticulture officer if mold persists despite better airflow or spreads across protected-cultivation beds.',
      te: 'గాలి ప్రసరణ పెంచినా బూజు తగ్గకపోతే లేదా పాలీహౌస్/తోట మొత్తం వ్యాపిస్తుంటే ఉద్యానవన అధికారిని సంప్రదించండి.',
      hi: 'हवा बढ़ाने के बाद भी फफूंद न रुके या पूरे बेड में फैल जाए, तो बागवानी अधिकारी से सलाह लें।',
    },
    simpleWhenToSeekHelp: {
      en: 'Ask a local expert if mold keeps spreading after increasing airflow.',
      te: 'గాలి పెంచినా బూజు ఆగకపోతే నిపుణులను అడగండి.',
      hi: 'हवा बढ़ाने पर भी रोग न रुके तो विशेषज्ञ से मिलें।',
    },
  },

  // =========================================================================
  // 2. CHILI
  // =========================================================================
  {
    id: 'Leaf Curl',
    crop: 'Chili',
    name: {
      en: 'Leaf Curl',
      te: 'మిరప ముడత తెగులు (Leaf Curl)',
      hi: 'मिर्च का पर्ण कुंचन रोग (Leaf Curl)',
    },
    summary: {
      en: 'Upward curling or puckering of young chili leaves accompanied by stunted shoots and smaller leaves.',
      te: 'మిరప లేత ఆకులు పైకి ముడుచుకుని, మొక్క పెరుగుదల ఆగిపోయి ఆకులు చిన్నవిగా మారతాయి.',
      hi: 'मिर्च के नए पत्ते ऊपर की ओर मुड़कर सिकुड़ जाते हैं और पौधे की बढ़वार रुक जाती है।',
    },
    simpleSummary: {
      en: 'Chili leaves curl upward and plant growth slows down.',
      te: 'మిరప ఆకులు పైకి ముడుచుకుని మొక్క పెరగదు.',
      hi: 'मिर्च के पत्ते ऊपर मुड़ते हैं और पौधा छोटा रह जाता है।',
    },
    symptoms: {
      en: [
        'Upward curling leaves and stunted growth',
        'Thickened or crinkled leaf veins on young shoots',
        'Reduced flowering and small misshapen buds',
      ],
      te: [
        'ఆకులు పైకి ముడుచుకోవడం మరియు మొక్క పెరుగుదల తగ్గడం',
        'లేత చిగుర్ల ఆకులు మందంగా, ముడతలు పడినట్లు ఉండటం',
        'పూత తగ్గి మొగ్గలు సరిగా విచ్చుకోకపోవడం',
      ],
      hi: [
        'पत्तों का ऊपर की ओर मुड़ना और पौधे की रुकी हुई बढ़वार',
        'नई कोपलों के पत्तों की नसें मोटी और सिकुड़ी दिखना',
        'फूल कम आना और कलियां छोटी रह जाना',
      ],
    },
    simpleSymptoms: {
      en: [
        'Leaves curl upward like a boat',
        'Plant looks short and bushy',
        'Fewer flowers on shoots',
      ],
      te: [
        'ఆకులు పడవలా పైకి ముడుచుకుంటాయి',
        'మొక్క పొట్టిగా, గుబురుగా ఉంటుంది',
        'పూత తక్కువగా వస్తుంది',
      ],
      hi: [
        'पत्ते नाव की तरह ऊपर मुड़ते हैं',
        'पौधा छोटा और झाड़ीदार दिखता है',
        'फूल बहुत कम आते हैं',
      ],
    },
    likelyCause: {
      en: 'Often linked to sap-sucking pests such as whiteflies, thrips, or mites feeding on young leaves and spreading viral curl.',
      te: 'లేత ఆకులపై రసం పీల్చే తెల్లదోమ, తామర పురుగులు లేదా నల్లి వంటి కీటకాలు ఆశించడం మరియు వాటి ద్వారా వైరస్ వ్యాపించడం వల్ల వస్తుంది.',
      hi: 'सफेद मक्खी, थ्रिप्स या माइट्स जैसे रस चूसने वाले कीटों के हमले और उनसे फैलने वाले वायरस के कारण यह रोग होता है।',
    },
    simpleLikelyCause: {
      en: 'Tiny sap-sucking insects like whiteflies, thrips, or mites spread leaf curl.',
      te: 'తెల్లదోమ, తామర పురుగులు, నల్లి వంటి చిన్న పురుగుల వల్ల వస్తుంది.',
      hi: 'सफेद मक्खी, थ्रिप्स या माइट्स जैसे छोटे कीड़ों से फैलता है।',
    },
    safeActions: {
      en: [
        'Check undersides of leaves closely for tiny sap-sucking pests such as whiteflies, thrips, or mites',
        'Isolate or remove severely stunted plants to protect healthy neighboring chili plants',
        'Keep field borders free of host weeds that shelter pests',
        'Consult local agriculture guidance for region-appropriate integrated pest management',
      ],
      te: [
        'ఆకుల అడుగున తెల్లదోమ, తామర పురుగులు లేదా నల్లి వంటి రసం పీల్చే పురుగులు ఉన్నాయో పరిశీలించండి',
        'మిగతా ఆరోగ్యకరమైన మిరప మొక్కలను కాపాడటానికి తీవ్రంగా ముడుచుకున్న మొక్కలను వేరు చేయండి',
        'పొలం గట్లపై పురుగులకు ఆశ్రయం ఇచ్చే కలుపు మొక్కలను తీసివేయండి',
        'స్థానిక పరిస్థితులకు తగిన సమగ్ర సస్యరక్షణ కోసం వ్యవసాయ అధికారి సలహా తీసుకోండి',
      ],
      hi: [
        'पत्तों के नीचे सफेद मक्खी, थ्रिप्स या माइट्स जैसे रस चूसने वाले कीटों की जांच करें',
        'स्वस्थ मिर्च के पौधों को बचाने के लिए बहुत अधिक मुड़े और बौने पौधों को अलग करें',
        'खेत की मेड़ों से कीटों को पनाह देने वाले खरपतवार साफ रखें',
        'क्षेत्र के अनुसार सुरक्षित कीट प्रबंधन के लिए कृषि विशेषज्ञ से सलाह लें',
      ],
    },
    simpleSafeActions: {
      en: [
        'Look under leaves for tiny insects',
        'Remove badly stunted plants',
        'Clear weeds around field edges',
        'Ask local agriculture officer for guidance',
      ],
      te: [
        'ఆకు కింద చిన్న పురుగులు ఉన్నాయో చూడండి',
        'బాగా ముడుచుకున్న మొక్కలను తీసేయండి',
        'గట్లపై కలుపు మొక్కలు శుభ్రం చేయండి',
        'వ్యవసాయ నిపుణుల సలహా తీసుకోండి',
      ],
      hi: [
        'पत्ते के नीचे छोटे कीड़े देखें',
        'बहुत खराब बौने पौधे हटा दें',
        'मेड़ की घास-खरपतवार साफ करें',
        'कृषि अधिकारी से सलाह लें',
      ],
    },
    prevention: {
      en: [
        'Raise seedlings under fine insect-proof nursery netting',
        'Use yellow sticky monitoring cards near nursery and field edges to watch pest activity early',
        'Maintain balanced soil nutrition and avoid excessive nitrogen flushing',
      ],
      te: [
        'నారుమడిని సన్నని పురుగుల వల (Insect net) కింద పెంచండి',
        'పురుగుల ఉనికిని ముందే గమనించడానికి పసుపు జిగురు అట్టలు వాడండి',
        'సమతుల్య పోషకాలు ఇచ్చి, అధిక యూరియా/నత్రజని వాడకాన్ని తగ్గించండి',
      ],
      hi: [
        'नर्सरी के पौधे बारीक कीट-रोधी जाली के नीचे तैयार करें',
        'कीटों की शुरुआती पहचान के लिए खेत के किनारे पीले चिपचिपे कार्ड लगाएं',
        'संतुलित खाद दें और अत्यधिक नाइट्रोजन देने से बचें',
      ],
    },
    simplePrevention: {
      en: [
        'Protect seedlings with insect net',
        'Clear weeds before planting',
        'Avoid too much nitrogen fertilizer',
      ],
      te: [
        'నారుమడిపై పురుగుల వల కట్టండి',
        'నాటే ముందు కలుపు తీయండి',
        'ఎక్కువ నత్రజని ఎరువు వేయకండి',
      ],
      hi: [
        'नर्सरी को जाली से ढकें',
        'रोपाई से पहले खरपतवार हटाएं',
        'अधिक यूरिया डालने से बचें',
      ],
    },
    whenToSeekHelp: {
      en: 'Seek local agriculture advice if curling appears across newly transplanted plots or if sap-sucking insects are multiplying rapidly.',
      te: 'కొత్తగా నాటిన పొలంలో ఎక్కువ మొక్కలకు ముడత కనిపించినా లేదా రసం పీల్చే పురుగులు ఎక్కువగా ఉన్నా వెంటనే వ్యవసాయ అధికారిని సంప్రదించండి.',
      hi: 'नई रोपी गई फसल में कई पौधों पर पत्तियां मुड़ रही हों या रस चूसने वाले कीट तेजी से बढ़ रहे हों, तो तुरंत कृषि विशेषज्ञ से सलाह लें।',
    },
    simpleWhenToSeekHelp: {
      en: 'Ask an expert if curling spreads to many young plants.',
      te: 'చాలా లేత మొక్కలకు ముడత వ్యాపిస్తే నిపుణులను కలవండి.',
      hi: 'कई नए पौधों में पत्ते मुड़ने लगें तो विशेषज्ञ से पूछें।',
    },
  },
  {
    id: 'Powdery Mildew',
    crop: 'Chili',
    name: {
      en: 'Powdery Mildew',
      te: 'బూడిద తెగులు (Powdery Mildew)',
      hi: 'चूर्णिल आसिता / सफेद चूर्ण रोग (Powdery Mildew)',
    },
    summary: {
      en: 'White powdery patches on chili leaves that can cause leaves to yellow and drop prematurely.',
      te: 'మిరప ఆకులపై తెల్లటి పిండి చల్లినట్లుగా బూడిద మచ్చలు ఏర్పడి, ఆకులు పసుపు రంగులోకి మారి రాలిపోతాయి.',
      hi: 'मिर्च के पत्तों पर सफेद पाउडर जैसी परत जम जाती है, जिससे पत्ते पीले पड़कर गिरने लगते हैं।',
    },
    simpleSummary: {
      en: 'White powder-like patches on leaves causing leaf drop.',
      te: 'ఆకులపై తెల్లని పిండి లాంటి మచ్చలు, ఆకులు రాలడం.',
      hi: 'पत्तों पर सफेद पाउडर जैसी परत और पत्तों का गिरना।',
    },
    symptoms: {
      en: [
        'White powdery growth on upper or lower leaf surfaces',
        'Leaves gradually turn pale yellow and shed early',
        'Exposed chili pods face higher sun-scald risk after leaf drop',
      ],
      te: [
        'ఆకుల పైభాగంలో లేదా కింది భాగంలో తెల్లని పొడి లాంటి పెరుగుదల',
        'ఆకులు క్రమంగా పసుపు రంగులోకి మారి రాలిపోవడం',
        'ఆకులు రాలడం వల్ల కాయలపై ఎండ దెబ్బ తగిలే ప్రమాదం',
      ],
      hi: [
        'पत्तों की ऊपरी या निचली सतह पर सफेद पाउडर जैसा जमाव',
        'पत्ते धीरे-धीरे पीले पड़कर समय से पहले गिरना',
        'पत्ते गिरने से फलों पर तेज धूप का असर पड़ना',
      ],
    },
    simpleSymptoms: {
      en: [
        'White flour-like dust on leaves',
        'Affected leaves turn yellow',
        'Leaves drop off early',
      ],
      te: [
        'ఆకులపై తెల్లటి పిండి లాంటి పొడి',
        'ఆకులు పసుపు రంగులోకి మారడం',
        'ఆకులు ముందుగానే రాలిపోవడం',
      ],
      hi: [
        'पत्तों पर सफेद आटे जैसा पाउडर',
        'प्रभावित पत्ते पीले पड़ना',
        'पत्तों का जल्दी झड़ना',
      ],
    },
    likelyCause: {
      en: 'Surface fungal infection favored by warm dry days, cool nights, and crowded shaded chili foliage.',
      te: 'పగలు వెచ్చగా ఉండి రాత్రి చల్లగా ఉండే వాతావరణంలో, దట్టమైన నీడ గల మిరప మొక్కలలో ఈ బూడిద తెగులు సులభంగా వ్యాపిస్తుంది.',
      hi: 'गर्म-सूखे दिन, ठंडी रातों और घनी छायादार पत्तियों में यह सतही फफूंद रोग तेजी से पनपता है।',
    },
    simpleLikelyCause: {
      en: 'Fungal powder grows on shaded leaves during warm days and cool nights.',
      te: 'నీడ ఉన్న ఆకులపై వెచ్చని పగలు, చల్లని రాత్రులలో పెరిగే బూడిద శిలీంధ్రం.',
      hi: 'गर्म दिन, ठंडी रात और घनी छाया में पत्तों पर सफेद फफूंद उगती है।',
    },
    safeActions: {
      en: [
        'Improve airflow through the crop canopy by avoiding dense overcrowding',
        'Remove heavily affected leaves carefully and dispose of them outside the field',
        'Avoid excessive shade and keep irrigation balanced without water stress',
      ],
      te: [
        'మొక్కలు మరీ దట్టంగా లేకుండా గాలి బాగా ఆడేలా జాగ్రత్త తీసుకోండి',
        'తెల్ల పొడి ఎక్కువగా ఉన్న ఆకులను జాగ్రత్తగా తీసి పొలం బయట పారవేయండి',
        'అధిక నీడ లేకుండా చూసి, మొక్కలకు నీటి ఎద్దడి లేకుండా సమతుల్యంగా నీరు పెట్టండి',
      ],
      hi: [
        'फसल को बहुत घना न होने दें ताकि पौधों के बीच हवा का बहाव अच्छा रहे',
        'अधिक पाउडर वाले खराब पत्तों को सावधानी से तोड़कर खेत से बाहर हटाएं',
        'अधिक छाया से बचें और पौधों को पानी की कमी न होने दें',
      ],
    },
    simpleSafeActions: {
      en: [
        'Give plants good air circulation',
        'Remove heavily powdered leaves',
        'Keep watering steady',
      ],
      te: [
        'మొక్కల మధ్య గాలి బాగా ఆడనివ్వండి',
        'ఎక్కువ బూడిద ఉన్న ఆకులను తీసేయండి',
        'సమయానికి నీరు పెట్టండి',
      ],
      hi: [
        'पौधों में हवा लगने दें',
        'ज्यादा पाउडर वाले पत्ते हटाएं',
        'नियमित सिंचाई बनाए रखें',
      ],
    },
    prevention: {
      en: [
        'Maintain proper plant spacing in rows so sunlight and breeze reach lower leaves',
        'Avoid overly dense weed growth around chili beds',
        'Inspect older lower leaves weekly during dry warm days with cool nights',
      ],
      te: [
        'కింది ఆకులకు కూడా ఎండ, గాలి తగిలేలా మొక్కల మధ్య సరైన దూరం ఉంచండి',
        'మిరప మడుల చుట్టూ కలుపు పెరగకుండా శుభ్రంగా ఉంచండి',
        'పగలు పొడిగా, రాత్రి చల్లగా ఉండే రోజుల్లో వారానికోసారి కింది ఆకులను పరిశీలించండి',
      ],
      hi: [
        'कतारों में सही दूरी रखें ताकि निचले पत्तों तक धूप और हवा पहुंचे',
        'मिर्च की क्यारियों के आसपास खरपतवार न बढ़ने दें',
        'गर्म दिन और ठंडी रातों वाले मौसम में हर हफ्ते निचले पत्तों की जांच करें',
      ],
    },
    simplePrevention: {
      en: [
        'Space chili plants well',
        'Keep beds weed-free',
        'Check lower leaves every week',
      ],
      te: [
        'మిరప మొక్కలను దూరంగా నాటండి',
        'మడులలో కలుపు లేకుండా చూడండి',
        'వారానికోసారి కింది ఆకులు చూడండి',
      ],
      hi: [
        'पौधों में उचित दूरी रखें',
        'क्यारियों को साफ रखें',
        'हर हफ्ते नीचे के पत्ते जांचें',
      ],
    },
    whenToSeekHelp: {
      en: 'Consult a qualified agriculture officer if white powder spreads across upper canopy leaves or causes noticeable defoliation before harvest.',
      te: 'తెల్ల బూడిద పై ఆకులకు వ్యాపించి ఆకులు ఎక్కువగా రాలిపోతుంటే స్థానిక వ్యవసాయ అధికారి సలహా తీసుకోండి.',
      hi: 'यदि सफेद पाउडर ऊपरी पत्तों तक फैल जाए और फसल की कटाई से पहले पत्ते झड़ने लगें, तो कृषि अधिकारी से सलाह लें।',
    },
    simpleWhenToSeekHelp: {
      en: 'Talk to a local expert if leaves start dropping heavily.',
      te: 'ఆకులు ఎక్కువగా రాలిపోతుంటే నిపుణులను సంప్రదించండి.',
      hi: 'पत्ते तेजी से झड़ने लगें तो विशेषज्ञ से बात करें।',
    },
  },
  {
    id: 'Anthracnose',
    crop: 'Chili',
    name: {
      en: 'Anthracnose',
      te: 'కాయ కుళ్ళు / ఆకు మచ్చ తెగులు (Anthracnose)',
      hi: 'एन्थ्रेक्नोज / फल सड़न रोग (Anthracnose)',
    },
    summary: {
      en: 'Dark sunken lesions on chili leaves or ripening fruits that reduce pod quality and spread in warm wet conditions.',
      te: 'మిరప ఆకులు లేదా పండుతున్న కాయలపై లోతుగా కుంగిన నల్లని మచ్చలు ఏర్పడి కాయ నాణ్యత తగ్గుతుంది.',
      hi: 'मिर्च के पत्तों या पकते फलों पर धंसे हुए काले धब्बे बनते हैं जो गर्म और नम मौसम में तेजी से फैलते हैं।',
    },
    simpleSummary: {
      en: 'Dark sunken spots on chili leaves or pods in rainy weather.',
      te: 'వర్షపు వాతావరణంలో ఆకులు లేదా మిరప కాయలపై గుంట మచ్చలు.',
      hi: 'बारिश में मिर्च के पत्तों या फलों पर धंसे हुए काले धब्बे।',
    },
    symptoms: {
      en: [
        'Dark sunken lesions on pods or leaves',
        'Circular spots that expand and sometimes show concentric rings',
        'Affected chili fruits shrivel and decay from the lesion outward',
      ],
      te: [
        'కాయలు లేదా ఆకులపై లోతుగా కుంగిన నల్లని మచ్చలు',
        'వరుస వలయాలతో క్రమంగా పెద్దవయ్యే గుండ్రని మచ్చలు',
        'దెబ్బతిన్న మిరప కాయలు ముడుచుకుని కుళ్ళిపోవడం',
      ],
      hi: [
        'फल या पत्तों पर धंसे हुए गहरे धब्बे',
        'गोल धब्बे जो बड़े होते जाते हैं और कभी-कभी छल्ले बनाते हैं',
        'प्रभावित मिर्च के फल सिकुड़कर सड़ने लगते हैं',
      ],
    },
    simpleSymptoms: {
      en: [
        'Dark sunken spots on pods or leaves',
        'Spots grow bigger in wet weather',
        'Pods dry or rot in patches',
      ],
      te: [
        'కాయలు లేదా ఆకులపై నల్లటి గుంట మచ్చలు',
        'వర్షంలో మచ్చలు పెద్దవవుతాయి',
        'కాయలు పాడై కుళ్ళిపోతాయి',
      ],
      hi: [
        'फल या पत्तों पर धंसे काले धब्बे',
        'नमी में धब्बे बड़े हो जाते हैं',
        'फल धब्बों के पास से सड़ते हैं',
      ],
    },
    likelyCause: {
      en: 'Seed-borne and splash-spread fungal disease favored by warm temperatures, rain splashes, and fallen infected pods.',
      te: 'విత్తనాల ద్వారా లేదా వెచ్చని వర్షపు నీటి తుంపర్ల ద్వారా మరియు కింద పడిన కుళ్ళిన కాయల నుండి ఈ శిలీంధ్రం వ్యాపిస్తుంది.',
      hi: 'गर्म मौसम, बारिश के छींटों और गिरे हुए संक्रमित फलों व बीजों से यह फफूंद रोग फैलता है।',
    },
    simpleLikelyCause: {
      en: 'Fungus spreads from infected seeds or rain splashing off rotting pods.',
      te: 'పాడైన విత్తనాలు లేదా వర్షపు నీటి తుంపర్ల ద్వారా వ్యాపించే శిలీంధ్రం.',
      hi: 'संक्रमित बीज या बारिश के छींटों से सड़े फलों द्वारा फैलता है।',
    },
    safeActions: {
      en: [
        'Remove affected leaves and damaged chili pods promptly so they do not spread spores',
        'Keep the growing area clean of fallen fruit and plant debris',
        'Avoid working among wet plants after rain or dew to limit spread',
        'Seek local agriculture treatment advice before pod harvest is affected',
      ],
      te: [
        'తెగులు వ్యాపించకుండా దెబ్బతిన్న ఆకులు, కుళ్ళిన కాయలను వెంటనే తీసివేయండి',
        'మొక్కల చుట్టూ రాలిన కాయలు, ఆకులు లేకుండా శుభ్రంగా ఉంచండి',
        'వర్షం లేదా మంచు తడిగా ఉన్నప్పుడు మొక్కల మధ్య తిరగడం తగ్గించండి',
        'కాయల నాణ్యత దెబ్బతినక ముందే స్థానిక వ్యవసాయ నిపుణుల సలహా తీసుకోండి',
      ],
      hi: [
        'संक्रमण रोकने के लिए खराब पत्तों और धब्बेदार फलों को तुरंत हटाएं',
        'पौधों के आसपास गिरे हुए फल और सूखा कचरा साफ रखें',
        'बारिश या ओस में पौधे गीले हों तो खेत के अंदर काम करने से बचें',
        'तुड़ाई प्रभावित होने से पहले स्थानीय कृषि विशेषज्ञ से सलाह लें',
      ],
    },
    simpleSafeActions: {
      en: [
        'Pick off spotted pods and leaves',
        'Keep soil under plants clean',
        'Avoid touching wet plants',
        'Ask local agriculture officer for advice',
      ],
      te: [
        'మచ్చలు ఉన్న కాయలు, ఆకులు తీసేయండి',
        'మొక్కల కింద శుభ్రంగా ఉంచండి',
        'తడిగా ఉన్నప్పుడు మొక్కలను తాకకండి',
        'వ్యవసాయ అధికారి సలహా తీసుకోండి',
      ],
      hi: [
        'धब्बे वाले फल और पत्ते हटा दें',
        'पौधों के नीचे जमीन साफ रखें',
        'गीले पौधों को न छुएं',
        'कृषि विशेषज्ञ से सलाह लें',
      ],
    },
    prevention: {
      en: [
        'Source healthy, clean seed and disease-free seedlings',
        'Rotate chili beds away from tomato, brinjal, and chili for at least one season',
        'Use drip or base watering and ensure good field drainage',
      ],
      te: [
        'ఆరోగ్యకరమైన, శుభ్రమైన విత్తనాలు మరియు నారును మాత్రమే వాడండి',
        'కనీసం ఒక సీజన్ పాటు టమాటా, వంగ, మిరప కాకుండా ఇతర పంటలతో మార్పిడి చేయండి',
        'డ్రిప్ లేదా మొదట్లో నీరు పెడుతూ పొలంలో నీరు నిలవకుండా చూడండి',
      ],
      hi: [
        'स्वस्थ और रोग-मुक्त बीज व पौध का ही उपयोग करें',
        'कम से कम एक मौसम के लिए मिर्च, टमाटर और बैंगन के बजाय दूसरी फसल से फसल चक्र करें',
        'ड्रिप या जड़ के पास सिंचाई करें और जल निकासी अच्छी रखें',
      ],
    },
    simplePrevention: {
      en: [
        'Start with healthy seeds and seedlings',
        'Rotate crops next season',
        'Water at roots and drain extra rain',
      ],
      te: [
        'మంచి విత్తనాలు, నారు వాడండి',
        'వచ్చేసారి వేరే పంట వేయండి',
        'మొదట్లో నీరు పెట్టి వర్షపు నీరు పోయేలా చూడండి',
      ],
      hi: [
        'अच्छे स्वस्थ बीज और पौध चुनें',
        'अगली बार फसल बदलकर लगाएं',
        'जड़ में पानी दें और जल निकासी रखें',
      ],
    },
    whenToSeekHelp: {
      en: 'Consult a qualified agriculture expert if sunken lesions appear on young green pods or spread quickly after rain.',
      te: 'లేత కాయలపై లోతైన మచ్చలు కనిపించినా లేదా వర్షం తర్వాత వేగంగా వ్యాపించినా వెంటనే వ్యవసాయ నిపుణులను కలవండి.',
      hi: 'यदि कच्चे हरे फलों पर धंसे धब्बे दिखने लगें या बारिश के बाद तेजी से फैलें, तो तुरंत कृषि विशेषज्ञ से मिलें।',
    },
    simpleWhenToSeekHelp: {
      en: 'Get expert help if spots show up on green chili pods.',
      te: 'పచ్చి మిరప కాయలపై మచ్చలు కనిపిస్తే నిపుణులను కలవండి.',
      hi: 'हरी मिर्च के फलों पर धब्बे दिखें तो विशेषज्ञ से मिलें।',
    },
  },

  // =========================================================================
  // 3. POTATO
  // =========================================================================
  {
    id: 'Early Blight',
    crop: 'Potato',
    name: {
      en: 'Early Blight',
      te: 'బంగాళదుంప ముందస్తు ఆకు మచ్చ తెగులు (Early Blight)',
      hi: 'आलू का अगेती झुलसा रोग (Early Blight)',
    },
    summary: {
      en: 'Dark brown circular spots with target-board concentric rings appearing on older potato leaflets.',
      te: 'బంగాళదుంప ముదిరిన కింది ఆకులపై వలయాల ఆకారంలో ముదురు గోధుమ రంగు మచ్చలు ఏర్పడతాయి.',
      hi: 'आलू के पुराने निचले पत्तों पर छल्लेदार गोल गहरे भूरे धब्बे दिखाई देते हैं।',
    },
    simpleSummary: {
      en: 'Round brown spots with rings on older potato leaves.',
      te: 'పాత బంగాళదుంప ఆకులపై వలయాల గోధుమ మచ్చలు.',
      hi: 'आलू के पुराने पत्तों पर छल्लेदार भूरे गोल धब्बे।',
    },
    symptoms: {
      en: [
        'Small dark brown spots with concentric rings on older lower potato leaves',
        'Yellowing around lesions as spots enlarge and merge',
        'Leaves become brittle, dry out, and drop early',
      ],
      te: [
        'బంగాళదుంప కింది ఆకులపై వలయాలతో కూడిన ముదురు గోధుమ మచ్చలు',
        'మచ్చలు పెద్దవైన కొద్దీ చుట్టూ పసుపు రంగు వ్యాపించడం',
        'ఆకులు పెళుసుగా మారి ఎండి రాలిపోవడం',
      ],
      hi: [
        'आलू के पुराने निचले पत्तों पर छल्लेदार गहरे भूरे धब्बे',
        'धब्बे बढ़ने पर उनके चारों ओर पीलापन आना',
        'पत्तों का भंगुर होकर सूखना और जल्दी गिरना',
      ],
    },
    simpleSymptoms: {
      en: [
        'Brown ringed spots on lower potato leaves',
        'Yellow border around spots',
        'Dry leaves falling off early',
      ],
      te: [
        'కింది ఆకులపై వలయాల గోధుమ మచ్చలు',
        'మచ్చల చుట్టూ పసుపు రంగు',
        'ఆకులు ఎండి రాలిపోతాయి',
      ],
      hi: [
        'निचले पत्तों पर छल्ले वाले भूरे धब्बे',
        'धब्बों के किनारे पीलापन',
        'पत्ते सूखकर जल्दी गिरते हैं',
      ],
    },
    likelyCause: {
      en: 'Fungal spotting commonly seen as potato plants mature or face nutrient/moisture stress under alternating wet and warm conditions.',
      te: 'బంగాళదుంప పంట ముదిరే దశలో లేదా పోషకాల/నీటి ఒత్తిడి ఉన్నప్పుడు తడి మరియు వెచ్చని వాతావరణంలో ఈ శిలీంధ్ర మచ్చలు వస్తాయి.',
      hi: 'आलू की फसल पकने के चरण में या पोषण व नमी के तनाव के दौरान नम-गर्म मौसम में यह फफूंद रोग बढ़ता है।',
    },
    simpleLikelyCause: {
      en: 'Fungus grows on older stressed leaves in alternating damp and warm weather.',
      te: 'తడి మరియు వెచ్చని వాతావరణంలో ఒత్తిడికి గురైన పాత ఆకులపై పెరిగే శిలీంధ్రం.',
      hi: 'नम और गर्म मौसम में कमजोर पुराने पत्तों पर फफूंद लगती है।',
    },
    safeActions: {
      en: [
        'Remove heavily spotted lower leaves gently and dispose of them outside the plot',
        'Avoid sprinkler irrigation late in the day; irrigate furrows evenly without waterlogging',
        'Support plant vigor with balanced soil nutrition as recommended locally',
      ],
      te: [
        'మచ్చలు ఎక్కువగా ఉన్న కింది ఆకులను జాగ్రత్తగా తీసి పొలం బయట పారవేయండి',
        'సాయంత్రం వేళ ఆకులపై నీరు చల్లడం మాని, బోదెలలో సమానంగా నీరు పెట్టండి',
        'స్థానిక సిఫార్సుల మేరకు మొక్కలకు సమతుల్య పోషకాలు అందేలా చూడండి',
      ],
      hi: [
        'अधिक धब्बेदार निचले पत्तों को सावधानी से हटाकर खेत से बाहर नष्ट करें',
        'शाम को ऊपर से सिंचाई न करें; मेड़ों के बीच संतुलित सिंचाई करें',
        'स्थानीय कृषि सलाह के अनुसार पौधों को संतुलित पोषण दें',
      ],
    },
    simpleSafeActions: {
      en: [
        'Remove badly spotted lower leaves',
        'Irrigate in furrows, keep leaves dry',
        'Keep plants well nourished',
      ],
      te: [
        'మచ్చలు ఉన్న కింది ఆకులను తీసేయండి',
        'బోదెలలో నీరు పెట్టండి, ఆకులు తడపకండి',
        'మొక్కలకు సరైన పోషణ ఇవ్వండి',
      ],
      hi: [
        'खराब निचले पत्ते हटा दें',
        'नाली में सिंचाई करें, पत्ते सूखे रखें',
        'पौधों को संतुलित खाद दें',
      ],
    },
    prevention: {
      en: [
        'Use certified disease-free seed tubers and avoid leftover volunteer potato plants',
        'Rotate potato fields with cereals, pulses, or non-solanaceous crops',
        'Hill soil properly around ridges to protect developing tubers',
      ],
      te: [
        'తెగులు లేని నాణ్యమైన విత్తన దుంపలను మాత్రమే వాడండి',
        'బంగాళదుంప తర్వాత తృణధాన్యాలు లేదా పప్పుధాన్యాలతో పంట మార్పిడి చేయండి',
        'దుంపలు బయటపడకుండా మొక్కల మొదట్లో మట్టి ఎగదోయండి',
      ],
      hi: [
        'प्रमाणित रोग-मुक्त बीज आलू का ही उपयोग करें',
        'आलू के बाद अनाज या दलहन जैसी फसलों से फसल चक्र अपनाएं',
        'कंदों को बचाने के लिए समय पर मिट्टी चढ़ाएं',
      ],
    },
    simplePrevention: {
      en: [
        'Plant clean seed tubers',
        'Rotate with grains or pulses next season',
        'Earth up soil ridges cleanly',
      ],
      te: [
        'మంచి విత్తన దుంపలు నాటండి',
        'వచ్చేసారి ధాన్యాలు లేదా పప్పు పంట వేయండి',
        'మొక్కల మొదట్లో మట్టి ఎగదోయండి',
      ],
      hi: [
        'साफ-सुथरे बीज आलू बोएं',
        'अगली बार अनाज या दाल की फसल लें',
        'पौधों पर समय से मिट्टी चढ़ाएं',
      ],
    },
    whenToSeekHelp: {
      en: 'Contact an agriculture officer if concentric spots move rapidly onto upper potato foliage during tuber bulking.',
      te: 'దుంపలు ఊరే దశలో పై ఆకులకు కూడా మచ్చలు వేగంగా వ్యాపిస్తే వెంటనే వ్యవసాయ అధికారిని సంప్రదించండి.',
      hi: 'कंद बनने के समय यदि छल्लेदार धब्बे ऊपर के पत्तों पर तेजी से फैलें, तो कृषि अधिकारी से सलाह लें।',
    },
    simpleWhenToSeekHelp: {
      en: 'Ask an expert if spots spread onto upper leaves before harvest.',
      te: 'కోతకు ముందే పై ఆకులకు మచ్చలు వస్తే నిపుణులను కలవండి.',
      hi: 'खुदाई से पहले ऊपर के पत्तों पर धब्बे जाएं तो विशेषज्ञ से पूछें।',
    },
  },
  {
    id: 'Late Blight',
    crop: 'Potato',
    name: {
      en: 'Late Blight',
      te: 'బంగాళదుంప ఆలస్య ఆకు మాడు తెగులు (Late Blight)',
      hi: 'आलू का पछेती झुलसा रोग (Late Blight)',
    },
    summary: {
      en: 'Fast-spreading dark water-soaked blotches on potato leaves and stems during cool, misty, or rainy weather.',
      te: 'చల్లని, మబ్బు లేదా వర్షపు వాతావరణంలో బంగాళదుంప ఆకులు, కాండంపై వేగంగా వ్యాపించే నల్లని తడి మచ్చలు.',
      hi: 'ठंडे, धुंधले या बरसाती मौसम में आलू के पत्तों और तनों पर तेजी से फैलने वाले गहरे गीले धब्बे।',
    },
    simpleSummary: {
      en: 'Dark wet blotches spreading quickly in cool humid weather.',
      te: 'చల్లని తేమ వాతావరణంలో వేగంగా పెరిగే నల్లని తడి మచ్చలు.',
      hi: 'ठंडे-नम मौसम में तेजी से फैलने वाले गहरे गीले धब्बे।',
    },
    symptoms: {
      en: [
        'Irregular dark brown or black water-soaked leaf lesions',
        'Whitish fuzzy growth around lesion margins underneath leaves in morning dampness',
        'Rapid stem blackening and foliar collapse in humid spells',
      ],
      te: [
        'ఆకులపై ఆకారం లేని నల్లని లేదా ముదురు గోధుమ నీటి-నానిన మచ్చలు',
        'ఉదయం తేమలో ఆకు అడుగున మచ్చ అంచుల చుట్టూ తెల్లటి బూజు పొర',
        'తేమ కొనసాగితే కాండం నల్లబడి ఆకులు కుళ్ళిపోవడం',
      ],
      hi: [
        'पत्तों पर अनियमित गहरे काले या भूरे पानी से भीगे धब्बे',
        'सुबह की नमी में पत्ते के नीचे धब्बे के किनारे सफेद रूई जैसी परत',
        'नमी बने रहने पर तने का काला पड़ना और पौधे का गलना',
      ],
    },
    simpleSymptoms: {
      en: [
        'Dark wet patches on leaves',
        'White fuzz around spots under leaves',
        'Stems turn dark and collapse fast',
      ],
      te: [
        'ఆకులపై నల్లని తడి మచ్చలు',
        'ఆకు కింద మచ్చల అంచున తెల్ల బూజు',
        'కాండం నల్లబడి త్వరగా పాడవుతుంది',
      ],
      hi: [
        'पत्तों पर गहरे गीले धब्बे',
        'पत्ते के नीचे किनारे पर सफेद परत',
        'तने काले पड़कर तेजी से गलते हैं',
      ],
    },
    likelyCause: {
      en: 'Aggressive water-mold spread driven by cool temperatures, fog, drizzle, or wet foliage lasting overnight.',
      te: 'చల్లని ఉష్ణోగ్రతలు, పొగమంచు, చిరుజల్లులు మరియు రాత్రంతా ఆకులపై నిలిచే తేమ వల్ల ఈ తెగులు ఉధృతంగా వ్యాపిస్తుంది.',
      hi: 'ठंड, कोहरा, हल्की बारिश और रात भर पत्तों पर नमी बने रहने से यह जल-फफूंद बहुत तेजी से फैलती है।',
    },
    simpleLikelyCause: {
      en: 'Spreads very fast during cool, foggy, or rainy days.',
      te: 'చలి, పొగమంచు మరియు వర్షపు రోజులలో చాలా వేగంగా వ్యాపిస్తుంది.',
      hi: 'ठंड, कोहरे और बारिश के दिनों में बहुत तेजी से फैलता है।',
    },
    safeActions: {
      en: [
        'Uproot and isolate isolated heavily infected plants immediately to slow field spread',
        'Ensure furrows drain excess rainwater quickly without standing puddles',
        'Avoid entering wet potato rows unnecessarily',
        'Contact a local agriculture expert immediately for urgent regional guidance',
      ],
      te: [
        'పొలం అంతా వ్యాపించకుండా తీవ్రంగా దెబ్బతిన్న మొక్కలను వెంటనే తీసి వేరు చేయండి',
        'వర్షపు నీరు బోదెలలో నిలవకుండా త్వరగా బయటకు పోయేలా చూడండి',
        'ఆకులు తడిగా ఉన్నప్పుడు మొక్కల మధ్య అనవసరంగా తిరగకండి',
        'తక్షణ సలహా కోసం వెంటనే స్థానిక వ్యవసాయ నిపుణులను సంప్రదించండి',
      ],
      hi: [
        'खेत में फैलाव रोकने के लिए शुरुआत में प्रभावित पौधों को तुरंत उखाड़कर अलग करें',
        'मेड़ों के बीच बारिश का अतिरिक्त पानी जमा न होने दें',
        'गीले खेत में अनावश्यक रूप से चलने-फिरने से बचें',
        'तुरंत क्षेत्रीय सलाह के लिए स्थानीय कृषि विशेषज्ञ से संपर्क करें',
      ],
    },
    simpleSafeActions: {
      en: [
        'Remove first badly affected plants',
        'Drain standing rainwater quickly',
        'Contact agriculture expert immediately',
      ],
      te: [
        'ముందుగా దెబ్బతిన్న మొక్కలను తీసేయండి',
        'నిలిచిన వర్షపు నీటిని బయటకు పంపండి',
        'వెంటనే వ్యవసాయ నిపుణులను సంప్రదించండి',
      ],
      hi: [
        'शुरुआती खराब पौधों को हटाएं',
        'रुके हुए बारिश के पानी को निकालें',
        'तुरंत कृषि विशेषज्ञ से संपर्क करें',
      ],
    },
    prevention: {
      en: [
        'Plant healthy certified seed tubers and destroy cull piles before planting',
        'Hill soil well over tubers to prevent spores washing down into potatoes',
        'Monitor weather alerts during cool, cloudy months',
      ],
      te: [
        'ఆరోగ్యకరమైన సర్టిఫైడ్ విత్తన దుంపలు నాటి, పాత కుళ్ళిన దుంపల కుప్పలను నాశనం చేయండి',
        'దుంపలకు మట్టి బాగా ఎగదోసి తేమ/తెగులు దుంపలకు చేరకుండా చూడండి',
        'చల్లని, మబ్బు వాతావరణంలో పంటను నిత్యం గమనించండి',
      ],
      hi: [
        'प्रमाणित स्वस्थ बीज बोएं और खेत के पास सड़े आलू के ढेर न छोड़ें',
        'आलू के कंदों को संक्रमण से बचाने के लिए अच्छी तरह मिट्टी चढ़ाएं',
        'ठंडे और बादल वाले दिनों में नियमित निगरानी रखें',
      ],
    },
    simplePrevention: {
      en: [
        'Use clean certified seed tubers',
        'Cover tubers well with ridge soil',
        'Watch closely during foggy weather',
      ],
      te: [
        'మంచి సర్టిఫైడ్ విత్తన దుంపలు వాడండి',
        'దుంపలపై మట్టి బాగా ఎగదోయండి',
        'పొగమంచు రోజుల్లో జాగ్రత్తగా గమనించండి',
      ],
      hi: [
        'प्रमाणित साफ बीज आलू इस्तेमाल करें',
        'कंदों पर अच्छी तरह मिट्टी चढ़ाएं',
        'कोहरे वाले मौसम में ध्यान रखें',
      ],
    },
    whenToSeekHelp: {
      en: 'Seek urgent agriculture officer guidance immediately upon seeing water-soaked lesions, as Late Blight can defoliate potato plots within days.',
      te: 'నీటి-నానిన నల్ల మచ్చలు కనిపించిన వెంటనే వ్యవసాయ అధికారిని కలవండి; ఇది కొన్ని రోజుల్లోనే పంటను పూర్తిగా దెబ్బతీయగలదు.',
      hi: 'पत्तों पर गीले काले धब्बे दिखते ही तुरंत कृषि अधिकारी से मदद लें, क्योंकि यह रोग कुछ ही दिनों में पूरी फसल नष्ट कर सकता है।',
    },
    simpleWhenToSeekHelp: {
      en: 'Get urgent expert help the same day dark wet patches appear.',
      te: 'నల్లని తడి మచ్చలు కనిపించిన రోజే నిపుణులను పిలవండి.',
      hi: 'गहरे गीले धब्बे दिखते ही उसी दिन विशेषज्ञ से संपर्क करें।',
    },
  },
  {
    id: 'Leaf Roll',
    crop: 'Potato',
    name: {
      en: 'Leaf Roll',
      te: 'బంగాళదుంప ఆకు చుట్టు తెగులు (Leaf Roll)',
      hi: 'आलू का पर्ण मुड़न रोग (Leaf Roll)',
    },
    summary: {
      en: 'Upward rolling of potato leaflets into stiff, leathery tubes, often starting on lower or young leaves with pale yellowing.',
      te: 'బంగాళదుంప ఆకులు పైకి గట్టి గొట్టాల వలె చుట్టుకుని, పెళుసుగా మారి పసుపు రంగులోకి మారుతాయి.',
      hi: 'आलू के पत्ते ऊपर की ओर कड़े, चमड़े जैसे नलिकाकार मुड़ जाते हैं और पीले पड़ने लगते हैं।',
    },
    simpleSummary: {
      en: 'Potato leaves roll upward into stiff, brittle tubes.',
      te: 'బంగాళదుంప ఆకులు గట్టిగా పైకి చుట్టుకుంటాయి.',
      hi: 'आलू के पत्ते ऊपर की ओर कड़े होकर मुड़ जाते हैं।',
    },
    symptoms: {
      en: [
        'Margins of potato leaflets roll upward and inward toward the midrib',
        'Rolled leaves feel stiff, thickened, and leathery when touched',
        'Stunted upright growth with pale yellowing or purplish tint',
      ],
      te: [
        'ఆకుల అంచులు పైకి, లోపలికి మడతపడటం',
        'చుట్టుకున్న ఆకులు తాకినప్పుడు గట్టిగా, మందంగా, పెళుసుగా అనిపించడం',
        'మొక్క పెరుగుదల తగ్గి లేత పసుపు లేదా ఊదా రంగు ఛాయ కనిపించడం',
      ],
      hi: [
        'पत्तों के किनारे ऊपर और अंदर की ओर मुड़ना',
        'मुड़े हुए पत्ते छूने पर कड़े और मोटे महसूस होना',
        'पौधे का छोटा रह जाना और पत्तों में हल्का पीलापन दिखना',
      ],
    },
    simpleSymptoms: {
      en: [
        'Leaves roll upward into tubes',
        'Leaves feel stiff and leathery',
        'Plant looks short and pale',
      ],
      te: [
        'ఆకులు గొట్టాల్లా పైకి చుట్టుకుంటాయి',
        'ఆకులు గట్టిగా మందంగా ఉంటాయి',
        'మొక్క పొట్టిగా, పాలిపోయి ఉంటుంది',
      ],
      hi: [
        'पत्ते नली की तरह ऊपर मुड़ते हैं',
        'पत्ते छूने में कड़े लगते हैं',
        'पौधा छोटा और पीला दिखता है',
      ],
    },
    likelyCause: {
      en: 'Commonly linked to viral infection spread by aphids or planted through infected seed tubers.',
      te: 'పేనుబంక (Aphids) వంటి రసం పీల్చే పురుగుల ద్వారా వ్యాపించే వైరస్ లేదా వైరస్ సోకిన విత్తన దుంపల వాడకం వల్ల ఇది వస్తుంది.',
      hi: 'माहू (एफिड) कीटों द्वारा फैलने वाले वायरस या संक्रमित बीज आलू की बुवाई के कारण यह समस्या होती है।',
    },
    simpleLikelyCause: {
      en: 'Spread by aphids (tiny sap-sucking insects) or infected seed tubers.',
      te: 'పేనుబంక పురుగులు లేదా వైరస్ ఉన్న విత్తన దుంపల ద్వారా వస్తుంది.',
      hi: 'माहू कीटों या संक्रमित बीज आलू से फैलता है।',
    },
    safeActions: {
      en: [
        'Inspect leaf undersides for aphids and monitor neighboring plants',
        'Rogue out and remove obviously stunted rolled plants early if few are affected',
        'Do not save tubers from rolled plants for next season seed',
        'Consult local agriculture guidance for aphid monitoring and safe management',
      ],
      te: [
        'ఆకుల అడుగున పేనుబంక పురుగులు ఉన్నాయో పరిశీలించండి',
        'తక్కువ మొక్కలలోనే లక్షణాలు ఉంటే వాటిని ముందుగానే తీసివేయండి',
        'ఆకు చుట్టు తెగులు ఉన్న మొక్కల దుంపలను వచ్చే సీజన్ విత్తనాల కోసం ఉంచకండి',
        'సమగ్ర పురుగుల నియంత్రణ కోసం స్థానిక వ్యవసాయ అధికారి సలహా తీసుకోండి',
      ],
      hi: [
        'पत्तों के नीचे माहू (एफिड) कीटों की जांच करें और पास के पौधों को देखें',
        'यदि कम पौधे प्रभावित हों तो उन्हें शुरुआत में ही खेत से निकाल दें',
        'मुड़े हुए पौधों के आलू अगले मौसम में बीज के लिए न रखें',
        'माहू की निगरानी और सुरक्षित रोकथाम के लिए कृषि विशेषज्ञ से पूछें',
      ],
    },
    simpleSafeActions: {
      en: [
        'Check undersides for tiny aphids',
        'Do not reuse tubers from sick plants as seed',
        'Ask agriculture officer for guidance',
      ],
      te: [
        'ఆకు కింద పేనుబంక ఉన్నాయో చూడండి',
        'రోగం ఉన్న మొక్కల దుంపలను విత్తనంగా వాడకండి',
        'వ్యవసాయ అధికారి సలహా తీసుకోండి',
      ],
      hi: [
        'पत्ते के नीचे माहू कीट देखें',
        'बीमार पौधों के आलू बीज में न रखें',
        'कृषि अधिकारी से सलाह लें',
      ],
    },
    prevention: {
      en: [
        'Plant certified virus-tested seed tubers each season',
        'Control host weeds along field borders that harbor aphids',
        'Use yellow sticky cards to monitor aphid movement early',
      ],
      te: [
        'ప్రతి సీజన్‌లో సర్టిఫైడ్ ఆరోగ్యకరమైన విత్తన దుంపలను నాటండి',
        'పేనుబంకకు ఆశ్రయం ఇచ్చే గట్లపై కలుపు మొక్కలను శుభ్రం చేయండి',
        'పురుగులను గమనించడానికి పసుపు జిగురు అట్టలు వాడండి',
      ],
      hi: [
        'हर मौसम में प्रमाणित और रोग-मुक्त बीज आलू लगाएं',
        'मेड़ों से माहू को पनाह देने वाले खरपतवार हटाएं',
        'कीटों की निगरानी के लिए पीले चिपचिपे कार्ड लगाएं',
      ],
    },
    simplePrevention: {
      en: [
        'Buy certified clean seed tubers',
        'Keep field edges free of weeds',
        'Watch for aphids early in the season',
      ],
      te: [
        'సర్టిఫైడ్ మంచి విత్తన దుంపలు కొనండి',
        'పొలం గట్లపై కలుపు లేకుండా చూడండి',
        'సీజన్ ఆరంభం నుండే పేనుబంకను గమనించండి',
      ],
      hi: [
        'प्रमाणित साफ बीज आलू खरीदें',
        'खेत की मेड़ें साफ रखें',
        'शुरुआत से ही माहू की निगरानी करें',
      ],
    },
    whenToSeekHelp: {
      en: 'Seek local agriculture advice if leaf rolling appears across wide patches or if aphid colonies are increasing rapidly.',
      te: 'పొలంలో ఎక్కువ భాగంలో ఆకులు చుట్టుకుపోతున్నా లేదా పేనుబంక వేగంగా పెరుగుతున్నా వ్యవసాయ నిపుణులను కలవండి.',
      hi: 'यदि खेत के बड़े हिस्से में पत्ते मुड़ रहे हों या माहू तेजी से बढ़ रहे हों, तो कृषि विशेषज्ञ से सलाह लें।',
    },
    simpleWhenToSeekHelp: {
      en: 'Contact an expert if rolling shows up across many rows.',
      te: 'చాలా వరుసలలో ఆకులు చుట్టుకుంటే నిపుణులను సంప్రదించండి.',
      hi: 'कई कतारों में पत्ते मुड़ें तो विशेषज्ञ से संपर्क करें।',
    },
  },

  // =========================================================================
  // 4. RICE
  // =========================================================================
  {
    id: 'Rice Blast',
    crop: 'Rice',
    name: {
      en: 'Rice Blast',
      te: 'వరి అగ్గి తెగులు (Rice Blast)',
      hi: 'धान का झोंका रोग (Rice Blast)',
    },
    summary: {
      en: 'Diamond or spindle-shaped spots with gray-white centers and brown borders on rice leaves.',
      te: 'వరి ఆకులపై మధ్యలో బూడిద-తెలుపు రంగు మరియు చుట్టూ గోధుమ అంచుతో కన్ను లేదా వజ్రం ఆకారపు మచ్చలు కనిపిస్తాయి.',
      hi: 'धान की पत्तियों पर बीच से भूरे-सफेद और किनारों से गहरे भूरे रंग के नाव या हीरे के आकार के धब्बे बनते हैं।',
    },
    simpleSummary: {
      en: 'Diamond-shaped gray spots with brown borders on rice leaves.',
      te: 'వరి ఆకులపై గోధుమ అంచు గల బూడిద వజ్రం ఆకారపు మచ్చలు.',
      hi: 'धान के पत्तों पर भूरे किनारे वाले नाव जैसे सफेद-भूरे धब्बे।',
    },
    symptoms: {
      en: [
        'Spindle or diamond-shaped spots with pointed ends on rice leaves',
        'Grayish-white center surrounded by a dark brown or reddish border',
        'Lesions may merge and cause leaf tips and blades to dry out like burnt patches',
      ],
      te: [
        'వరి ఆకులపై రెండు చివరలు మొనదేలిన కన్ను లేదా వజ్రం ఆకారపు మచ్చలు',
        'మధ్యలో బూడిద-తెలుపు రంగు ఉండి చుట్టూ ముదురు గోధుమ అంచు',
        'మచ్చలు కలిసిపోయి ఆకులు మంటలో కాలిపోయినట్లు ఎండిపోవడం',
      ],
      hi: [
        'धान की पत्तियों पर दोनों सिरों से नुकीले नाव या हीरे जैसे धब्बे',
        'धब्बे के बीच में स्लेटी-सफेद रंग और चारों ओर गहरा भूरा किनारा',
        'धब्बों के आपस में मिलने से पत्तियां झुलसी हुई और सूखी दिखना',
      ],
    },
    simpleSymptoms: {
      en: [
        'Eye or diamond-shaped spots on leaves',
        'Gray center with brown edge',
        'Leaves dry up in patches',
      ],
      te: [
        'ఆకులపై కన్ను ఆకారపు మచ్చలు',
        'మధ్యలో బూడిద, చుట్టూ గోధుమ అంచు',
        'ఆకులు కాలిపోయినట్లు ఎండుతాయి',
      ],
      hi: [
        'पत्तों पर आंख या नाव जैसे धब्बे',
        'बीच में स्लेटी और किनारे पर भूरा रंग',
        'पत्ते सूखकर झुलसे दिखते हैं',
      ],
    },
    likelyCause: {
      en: 'Fungal infection encouraged by high nitrogen fertilization, prolonged leaf wetness from dew or drizzle, and shaded dense paddy.',
      te: 'అధిక యూరియా/నత్రజని వాడకం, ఆకులపై ఎక్కువసేపు మంచు లేదా వర్షపు తేమ ఉండటం మరియు దట్టమైన పైరులో ఈ శిలీంధ్రం పెరుగుతుంది.',
      hi: 'अधिक नाइट्रोजन (यूरिया) देने, पत्तों पर लंबे समय तक ओस या नमी रहने और घनी फसल में यह फफूंद तेजी से फैलती है।',
    },
    simpleLikelyCause: {
      en: 'Fungus spreads when paddy gets excess nitrogen and stays damp overnight.',
      te: 'అధిక నత్రజని ఎరువు మరియు రాత్రిపూట ఎక్కువ తేమ వల్ల వస్తుంది.',
      hi: 'ज्यादा यूरिया और रात भर पत्तों पर नमी रहने से फैलता है।',
    },
    safeActions: {
      en: [
        'Pause top-dressing nitrogen/urea immediately if blast spots are spreading',
        'Maintain shallow standing water rather than letting the paddy dry out completely under stress',
        'Remove grassy weeds from field bunds that can harbor fungal spores',
        'Contact your local agriculture officer promptly, especially before panicle emergence',
      ],
      te: [
        'అగ్గి తెగులు మచ్చలు కనిపిస్తుంటే యూరియా/నత్రజని ఎరువు వేయడం వెంటనే ఆపండి',
        'పొలం పూర్తిగా ఎండిపోనివ్వకుండా తగినంత పలుచటి నీరు ఉంచండి',
        'పొలం గట్లపై ఉండే గడ్డి కలుపు మొక్కలను శుభ్రం చేయండి',
        'కంకి దశకు ముందే స్థానిక వ్యవసాయ అధికారి సలహా తీసుకోండి',
      ],
      hi: [
        'झोंका रोग के धब्बे दिखने पर तुरंत यूरिया/नाइट्रोजन की ऊपरी खाद रोक दें',
        'खेत को पूरी तरह सूखने न दें, हल्की नमी या उथला पानी बनाए रखें',
        'मेड़ों पर उगे घास-खरपतवार साफ करें जो रोग फैलाते हैं',
        'बाली निकलने से पहले तुरंत स्थानीय कृषि अधिकारी से सलाह लें',
      ],
    },
    simpleSafeActions: {
      en: [
        'Stop adding extra urea right now',
        'Keep shallow water steady in field',
        'Clear weeds on bunds',
        'Ask local agriculture officer promptly',
      ],
      te: [
        'వెంటనే యూరియా వేయడం ఆపండి',
        'మడిలో పలుచటి నీరు నిలకడగా ఉంచండి',
        'గట్లపై కలుపు తీసేయండి',
        'వ్యవసాయ అధికారి సలహా తీసుకోండి',
      ],
      hi: [
        'अभी अतिरिक्त यूरिया डालना बंद करें',
        'खेत में हल्का पानी बनाए रखें',
        'मेड़ से घास हटाएं',
        'कृषि अधिकारी से तुरंत मिलें',
      ],
    },
    prevention: {
      en: [
        'Use locally recommended blast-tolerant rice varieties and clean seed',
        'Apply nitrogen in balanced split doses instead of heavy single applications',
        'Avoid overly dense transplanting spacing in humid areas',
      ],
      te: [
        'తెగులును తట్టుకునే స్థానిక సిఫార్సు వరి రకాలను మరియు శుభ్రమైన విత్తనాలను ఎంచుకోండి',
        'నత్రజని ఎరువును ఒకేసారి కాకుండా సమతుల్యంగా విడతలుగా వేయండి',
        'తేమ ఎక్కువగా ఉండే ప్రాంతాల్లో మరీ దగ్గరగా నాట్లు వేయకండి',
      ],
      hi: [
        'रोग-रोधी धान की किस्मों और साफ बीजों का चयन करें',
        'नाइट्रोजन खाद को एक साथ ज्यादा देने के बजाय संतुलित हिस्सों में डालें',
        'नमी वाले क्षेत्रों में रोपाई बहुत घनी न करें',
      ],
    },
    simplePrevention: {
      en: [
        'Choose tolerant paddy varieties',
        'Split nitrogen fertilizer doses',
        'Avoid planting too densely',
      ],
      te: [
        'తెగులు తట్టుకునే వరి రకాలు వేయండి',
        'యూరియాను విడతలుగా తక్కువగా వేయండి',
        'నాట్లు మరీ దగ్గరగా వేయకండి',
      ],
      hi: [
        'रोग-रोधी किस्में लगाएं',
        'नाइट्रोजन खाद बांटकर डालें',
        'बहुत घनी रोपाई से बचें',
      ],
    },
    whenToSeekHelp: {
      en: 'Seek urgent agriculture guidance if spots appear near the leaf collar or panicle neck, as neck blast severely affects grain filling.',
      te: 'ఆకు తొడిమ లేదా కంకి మెడ భాగంలో మచ్చలు కనిపిస్తే వెంటనే వ్యవసాయ అధికారిని కలవండి; ఇది ధాన్యం గింజ కట్టడంపై తీవ్ర ప్రభావం చూపుతుంది.',
      hi: 'यदि पत्ते की गर्दन या बाली के डंठल पर धब्बे दिखें तो तुरंत कृषि विशेषज्ञ से सलाह लें, क्योंकि इससे दाने भरने पर गंभीर असर पड़ता है।',
    },
    simpleWhenToSeekHelp: {
      en: 'Get urgent expert help if spots appear near the panicle neck.',
      te: 'కంకి మెడ దగ్గర మచ్చలు కనిపిస్తే వెంటనే నిపుణులను కలవండి.',
      hi: 'बाली की गर्दन पर धब्बे दिखें तो तुरंत विशेषज्ञ से मिलें।',
    },
  },
  {
    id: 'Bacterial Leaf Blight',
    crop: 'Rice',
    name: {
      en: 'Bacterial Leaf Blight',
      te: 'వరి ఆకు ఎండు తెగులు (Bacterial Leaf Blight)',
      hi: 'धान का जीवाणु पर्ण झुलसा (Bacterial Leaf Blight)',
    },
    summary: {
      en: 'Yellowish to straw-colored wavy streaks starting from rice leaf tips or margins and spreading downward.',
      te: 'వరి ఆకు చివర్ల నుండి లేదా అంచుల నుండి అలల ఆకారంలో పసుపు, గడ్డి రంగు చారలు కిందికి వ్యాపిస్తాయి.',
      hi: 'धान की पत्तियों के सिरों या किनारों से पीले से पुआल जैसे लहरदार धब्बे नीचे की ओर फैलते हैं।',
    },
    simpleSummary: {
      en: 'Yellow-to-dry wavy stripes spreading inward from leaf tips and edges.',
      te: 'వరి ఆకు చివర్ల నుండి లోపలికి వ్యాపించే పసుపు, ఎండు చారలు.',
      hi: 'पत्तों के सिरों और किनारों से अंदर बढ़ती पीली-सूखी धारियां।',
    },
    symptoms: {
      en: [
        'Water-soaked stripes near leaf margins that turn yellow and then straw-white',
        'Wavy edge separating diseased dried tissue from green leaf blade',
        'Leaves dry from tip downward, especially after windy rain',
      ],
      te: [
        'ఆకు అంచుల వెంబడి నీటి-నానిన చారలు ఏర్పడి పసుపు, తర్వాత ఎండు గడ్డి రంగులోకి మారడం',
        'పచ్చని ఆకుకు మరియు ఎండిన భాగానికి మధ్య అలల లాంటి సరిహద్దు కనిపించడం',
        'గాలితో కూడిన వర్షాల తర్వాత ఆకు చివర్ల నుండి ఎండిపోవడం',
      ],
      hi: [
        'पत्ते के किनारों पर पानी से भीगी धारियां जो पीली होकर सफेद-सूखी पड़ जाती हैं',
        'हरे हिस्से और सूखे हिस्से के बीच लहरदार किनारा दिखना',
        'तेज हवा और बारिश के बाद पत्तियों का सिरे से नीचे की ओर सूखना',
      ],
    },
    simpleSymptoms: {
      en: [
        'Wavy yellow edges along leaf margins',
        'Leaf tips turn straw-colored and dry',
        'Spreads faster after wind and rain',
      ],
      te: [
        'ఆకు అంచులపై అలల లాంటి పసుపు చారలు',
        'ఆకు చివర్లు గడ్డిలా ఎండిపోతాయి',
        'గాలి వాన తర్వాత వేగంగా వ్యాపిస్తుంది',
      ],
      hi: [
        'पत्ते के किनारों पर लहरदार पीले निशान',
        'पत्ते के सिरे पुआल जैसे सूख जाते हैं',
        'आंधी-बारिश के बाद तेजी से फैलता है',
      ],
    },
    likelyCause: {
      en: 'Bacterial spread entering through leaf tips or wind-torn wounds during warm, rainy, and flooded field conditions.',
      te: 'వెచ్చని వర్షపు వాతావరణంలో, గాలికి ఆకులు చిరిగిన గాయాల ద్వారా మరియు మడి నుండి మడికి నీరు ప్రవహించడం ద్వారా ఈ బ్యాక్టీరియా వ్యాపిస్తుంది.',
      hi: 'गर्म-बरसाती मौसम में हवा से पत्तियों में लगी चोट और एक खेत से दूसरे खेत में बहते पानी के जरिए यह जीवाणु फैलता है।',
    },
    simpleLikelyCause: {
      en: 'Bacteria enter torn leaf edges during storms and spread through field water.',
      te: 'గాలి వానలో చిరిగిన ఆకుల ద్వారా, పొలం నీటి ద్వారా వ్యాపించే బ్యాక్టీరియా.',
      hi: 'बारिश-हवा में कटे पत्तों और खेत के बहते पानी से जीवाणु फैलते हैं।',
    },
    safeActions: {
      en: [
        'Drain excess standing water temporarily if safe for the crop stage and avoid water flowing from infected to healthy plots',
        'Stop nitrogen/urea top-dressing immediately',
        'Keep field bunds weed-free and avoid walking through wet paddy',
        'Seek local agriculture expert verification to confirm bacterial vs nutrient yellowing',
      ],
      te: [
        'తెగులు ఉన్న మడి నుండి ఆరోగ్యకరమైన మడిలోకి నీరు వెళ్ళకుండా ఆపి, అదనపు నీటిని తీసివేయండి',
        'నత్రజని/యూరియా ఎరువు వేయడం వెంటనే ఆపండి',
        'గట్లపై కలుపు తీసివేసి, పైరు తడిగా ఉన్నప్పుడు మధ్యలో తిరగకండి',
        'ఇది బ్యాక్టీరియా తెగులా లేక పోషక లోపమా అని వ్యవసాయ అధికారితో నిర్ధారించుకోండి',
      ],
      hi: [
        'संक्रमित खेत का पानी स्वस्थ खेतों में न जाने दें और अतिरिक्त पानी निकालें',
        'तुरंत यूरिया/नाइट्रोजन खाद डालना बंद करें',
        'मेड़ों को साफ रखें और गीली फसल के बीच चलने से बचें',
        'सही पहचान के लिए स्थानीय कृषि अधिकारी से जांच कराएं',
      ],
    },
    simpleSafeActions: {
      en: [
        'Stop water flowing between plots',
        'Pause urea fertilizer',
        'Avoid walking in wet paddy',
        'Check with local agriculture officer',
      ],
      te: [
        'మడి నుండి మడికి నీరు వెళ్ళనీయకండి',
        'యూరియా వేయడం ఆపండి',
        'తడి పైరులో తిరగకండి',
        'వ్యవసాయ అధికారిని సంప్రదించండి',
      ],
      hi: [
        'खेतों के बीच पानी का बहाव रोकें',
        'यूरिया डालना बंद करें',
        'गीली फसल में न चलें',
        'कृषि अधिकारी से जांच कराएं',
      ],
    },
    prevention: {
      en: [
        'Select locally recommended tolerant rice varieties',
        'Avoid clipping seedling leaf tips roughly during transplanting',
        'Maintain balanced potassium and avoid excess nitrogen',
      ],
      te: [
        'తెగులును తట్టుకునే స్థానిక వరి రకాలను నాటండి',
        'నాట్లు వేసేటప్పుడు నారు ఆకు చివర్లను బలంగా కత్తిరించడం మానుకోండి',
        'పొటాష్ సమతుల్యంగా వేసి అధిక నత్రజనిని నివారించండి',
      ],
      hi: [
        'स्थानीय स्तर पर अनुशंसित रोग-रोधी धान किस्में चुनें',
        'रोपाई के समय पौध की पत्तियों के सिरे न काटें',
        'संतुलित पोटाश दें और अधिक नाइट्रोजन से बचें',
      ],
    },
    simplePrevention: {
      en: [
        'Use tolerant rice varieties',
        'Handle seedlings gently at transplanting',
        'Balance nitrogen with potash',
      ],
      te: [
        'తెగులు తట్టుకునే రకాలు వాడండి',
        'నారు నాటేటప్పుడు ఆకులు కత్తిరించకండి',
        'సమతుల్య పొటాష్, నత్రజని వాడండి',
      ],
      hi: [
        'सहनशील किस्में लगाएं',
        'रोपाई में पौध की पत्तियां न काटें',
        'खाद में पोटाश और नाइट्रोजन संतुलित रखें',
      ],
    },
    whenToSeekHelp: {
      en: 'Seek prompt expert help if young transplanted rice shows whole-plant wilting ("kresek") or if wavy blight spreads rapidly across plots.',
      te: 'కొత్తగా నాటిన వరి మొక్కలు పూర్తిగా వాడిపోతున్నా లేదా ఆకు ఎండు తెగులు పొలమంతా వేగంగా వ్యాపిస్తున్నా వెంటనే వ్యవసాయ అధికారిని కలవండి.',
      hi: 'यदि नई रोपी गई फसल के पूरे पौधे मुरझाने लगें या पत्ती झुलसा तेजी से पूरे खेत में फैले, तो तुरंत कृषि विशेषज्ञ से मिलें।',
    },
    simpleWhenToSeekHelp: {
      en: 'Call an expert quickly if young plants wilt or blight spreads fast.',
      te: 'లేత మొక్కలు వాడిపోతుంటే వెంటనే నిపుణులను కలవండి.',
      hi: 'नए पौधे मुरझाने लगें तो तुरंत विशेषज्ञ से मिलें।',
    },
  },
  {
    id: 'Brown Spot',
    crop: 'Rice',
    name: {
      en: 'Brown Spot',
      te: 'వరి గోధుమ మచ్చ తెగులు (Brown Spot)',
      hi: 'धान का भूरा धब्बा रोग (Brown Spot)',
    },
    summary: {
      en: 'Oval brown sesame-seed-like spots with yellow halos scattered across rice leaves, often linked to soil or nutrient stress.',
      te: 'వరి ఆకులపై నువ్వు గింజల ఆకారంలో గోధుమ రంగు మచ్చలు చుట్టూ పసుపు అంచుతో కనిపిస్తాయి.',
      hi: 'धान की पत्तियों पर तिल के दाने जैसे अंडाकार भूरे धब्बे बनते हैं जिनके चारों ओर हल्का पीला घेरा होता है।',
    },
    simpleSummary: {
      en: 'Small oval brown spots with yellow rings on rice leaves.',
      te: 'వరి ఆకులపై పసుపు అంచుతో చిన్న గోధుమ మచ్చలు.',
      hi: 'धान के पत्तों पर पीले घेरे वाले छोटे अंडाकार भूरे धब्बे।',
    },
    symptoms: {
      en: [
        'Numerous oval or circular brown spots resembling sesame seeds',
        'Light yellow halo around older dark brown lesions',
        'Leaves may turn yellowish-brown and dry under severe spotting',
      ],
      te: [
        'ఆకులపై నువ్వు గింజల లాంటి అండాకార లేదా గుండ్రని గోధుమ మచ్చలు',
        'ముదురు మచ్చల చుట్టూ లేత పసుపు రంగు వలయం',
        'మచ్చలు ఎక్కువైతే ఆకులు పసుపు-గోధుమ రంగులోకి మారి ఎండిపోవడం',
      ],
      hi: [
        'पत्तियों पर तिल के दाने जैसे कई अंडाकार या गोल भूरे धब्बे',
        'पुराने गहरे धब्बों के चारों ओर हल्का पीला घेरा',
        'अधिक संक्रमण पर पत्तियों का पीला-भूरा होकर सूखना',
      ],
    },
    simpleSymptoms: {
      en: [
        'Sesame-seed shaped brown spots',
        'Faint yellow edge around spots',
        'Leaves look weak and brownish',
      ],
      te: [
        'నువ్వు గింజల లాంటి గోధుమ మచ్చలు',
        'మచ్చల చుట్టూ లేత పసుపు అంచు',
        'ఆకులు బలహీనంగా మారుతాయి',
      ],
      hi: [
        'तिल के दाने जैसे भूरे धब्बे',
        'धब्बों के बाहर हल्का पीला रंग',
        'पत्ते कमजोर और भूरे दिखते हैं',
      ],
    },
    likelyCause: {
      en: 'Fungal spotting that frequently appears in nutrient-deficient (especially potassium or zinc) or moisture-stressed paddy soils.',
      te: 'నేలలో పోషకాల లోపం (ముఖ్యంగా పొటాష్ లేదా జింక్ లోపం) లేదా నీటి ఎద్దడి ఉన్న వరి పొలాల్లో ఈ శిలీంధ్ర మచ్చలు ఎక్కువగా కనిపిస్తాయి.',
      hi: 'मिट्टी में पोषक तत्वों (विशेषकर पोटाश या जिंक) की कमी और पानी के तनाव वाले धान के खेतों में यह फफूंद रोग अधिक होता है।',
    },
    simpleLikelyCause: {
      en: 'Often linked to weak soil nutrition and moisture stress in paddy.',
      te: 'నేలలో పోషకాల లోపం మరియు నీటి ఎద్దడి వల్ల ఎక్కువగా వస్తుంది.',
      hi: 'मिट्टी में पोषण की कमी और पानी के तनाव से जुड़ा फफूंद रोग।',
    },
    safeActions: {
      en: [
        'Check soil moisture and avoid prolonged drought stress in the paddy field',
        'Get soil or plant nutrition evaluated locally (potassium, zinc, or balanced nutrients)',
        'Clear infected straw and crop debris after harvest rather than leaving it in bunds',
      ],
      te: [
        'వరి మడిలో నీటి ఎద్దడి లేకుండా తగినంత తేమ ఉండేలా చూసుకోండి',
        'స్థానిక వ్యవసాయ కేంద్రంలో నేల/పోషకాల లోపాన్ని (పొటాష్, జింక్) పరీక్షించుకోండి',
        'పంట కోత తర్వాత మచ్చలు ఉన్న గడ్డి, అవశేషాలను పొలంలో వదిలేయకండి',
      ],
      hi: [
        'खेत में लंबे सूखे तनाव से बचें और उचित नमी बनाए रखें',
        'स्थानीय कृषि केंद्र से मिट्टी और पोषक तत्वों (पोटाश, जिंक) की जांच कराएं',
        'कटाई के बाद संक्रमित पुआल और अवशेष खेत में न छोड़ें',
      ],
    },
    simpleSafeActions: {
      en: [
        'Avoid drying out the paddy',
        'Ask agriculture officer to check soil nutrition',
        'Clean infected straw after harvest',
      ],
      te: [
        'పొలం ఎండిపోకుండా నీరు చూడండి',
        'నేల పోషకాల పరీక్ష గురించి అధికారిని అడగండి',
        'కోత తర్వాత రోగం ఉన్న గడ్డిని శుభ్రం చేయండి',
      ],
      hi: [
        'खेत में नमी कम न होने दें',
        'मिट्टी के पोषण की जांच कराएं',
        'कटाई के बाद खराब पुआल साफ करें',
      ],
    },
    prevention: {
      en: [
        'Use healthy certified seed and avoid seed from heavily spotted panicles',
        'Correct soil nutrient deficiencies with organic matter and balanced fertilization',
        'Maintain even water management across the field',
      ],
      te: [
        'మచ్చలు ఉన్న కంకుల నుండి తీసిన విత్తనాలను వాడకండి; శుభ్రమైన విత్తనమే నాటండి',
        'సేంద్రియ ఎరువులు మరియు సమతుల్య పోషకాలతో నేల సారం పెంచండి',
        'పొలం అంతా సమానంగా నీరు ఉండేలా నిర్వహించండి',
      ],
      hi: [
        'स्वस्थ प्रमाणित बीज बोएं; धब्बेदार बालियों के बीज इस्तेमाल न करें',
        'जैविक खाद और संतुलित उर्वरकों से मिट्टी की कमी दूर करें',
        'पूरे खेत में समान जल प्रबंधन बनाए रखें',
      ],
    },
    simplePrevention: {
      en: [
        'Plant clean seed from healthy fields',
        'Improve soil health with organic compost',
        'Keep water level even',
      ],
      te: [
        'ఆరోగ్యకరమైన విత్తనాలు వాడండి',
        'పశువుల/సేంద్రియ ఎరువుతో నేల సారం పెంచండి',
        'నీరు సమానంగా ఉంచండి',
      ],
      hi: [
        'स्वस्थ खेत से साफ बीज चुनें',
        'जैविक खाद से मिट्टी सुधारें',
        'सिंचाई बराबर रखें',
      ],
    },
    whenToSeekHelp: {
      en: 'Consult an agriculture officer if brown spots spread onto grain husks or if leaves yellow across large areas of the field.',
      te: 'వరి గింజల పొట్టుపై కూడా మచ్చలు కనిపించినా లేదా పొలమంతా ఆకులు పసుపు రంగులోకి మారుతున్నా వ్యవసాయ అధికారిని సంప్రదించండి.',
      hi: 'यदि भूरे धब्बे दानों के छिलके पर दिखें या बड़े हिस्से में पत्तियां पीली पड़ें, तो कृषि अधिकारी से सलाह लें।',
    },
    simpleWhenToSeekHelp: {
      en: 'See an agriculture officer if spots appear on rice grains or large patches yellow.',
      te: 'గింజలపై మచ్చలు వచ్చినా లేదా ఆకులు ఎక్కువగా పసుపు రంగులోకి మారినా నిపుణులను కలవండి.',
      hi: 'दानों पर धब्बे आएं या बड़ा हिस्सा पीला पड़े तो विशेषज्ञ से मिलें।',
    },
  },

  // =========================================================================
  // 5. COTTON
  // =========================================================================
  {
    id: 'Cotton Leaf Curl',
    crop: 'Cotton',
    name: {
      en: 'Cotton Leaf Curl',
      te: 'పత్తి ఆకు ముడత తెగులు (Cotton Leaf Curl)',
      hi: 'कपास का पर्ण कुंचन रोग (Cotton Leaf Curl)',
    },
    summary: {
      en: 'Upward or downward cupping of cotton leaves with thickened dark veins and small leaf-like growths underneath.',
      te: 'పత్తి ఆకులు గిన్నెలా పైకి లేదా కిందికి ముడుచుకుని, ఆకు ఈనెలు మందంగా మారి అడుగున చిన్న కణుపుల్లాంటి పెరుగుదల కనిపిస్తుంది.',
      hi: 'कपास के पत्ते कप की तरह मुड़ जाते हैं, उनकी नसें मोटी हो जाती हैं और नीचे की ओर छोटी पत्ती जैसी उभार दिखती है।',
    },
    simpleSummary: {
      en: 'Cotton leaves cup and curl with thickened veins on the underside.',
      te: 'పత్తి ఆకులు గిన్నెలా ముడుచుకుని కింది ఈనెలు మందంగా ఉంటాయి.',
      hi: 'कपास के पत्ते कप जैसे मुड़ते हैं और नीचे की नसें मोटी दिखती हैं।',
    },
    symptoms: {
      en: [
        'Cupping or curling of upper cotton leaves upward or downward',
        'Darkened, thickened leaf veins visible on the leaf underside',
        'Stunted plant height with fewer squares and bolls',
      ],
      te: [
        'పై పత్తి ఆకులు పైకి లేదా కిందికి గిన్నె ఆకారంలో ముడుచుకోవడం',
        'ఆకు అడుగు భాగంలో ముదురు ఆకుపచ్చని మందపాటి ఈనెలు',
        'మొక్క పెరుగుదల ఆగిపోయి పూత, కాయలు తగ్గడం',
      ],
      hi: [
        'ऊपरी पत्तों का ऊपर या नीचे की ओर कप जैसा मुड़ना',
        'पत्ते के नीचे की नसों का गहरा हरा और मोटा दिखना',
        'पौधे की बढ़वार रुकना और फूल-टिंडे कम लगना',
      ],
    },
    simpleSymptoms: {
      en: [
        'Leaves cup and curl tightly',
        'Thick dark veins under the leaf',
        'Stunted shoots and fewer bolls',
      ],
      te: [
        'ఆకులు గట్టిగా ముడుచుకుంటాయి',
        'ఆకు కింద మందపాటి నల్ల ఈనెలు',
        'మొక్క ఎదగక కాయలు తగ్గుతాయి',
      ],
      hi: [
        'पत्ते कप की तरह मुड़ जाते हैं',
        'पत्ते के नीचे मोटी नसें दिखती हैं',
        'पौधा छोटा और कम टिंडों वाला रहता है',
      ],
    },
    likelyCause: {
      en: 'Viral disease transmitted primarily by whiteflies feeding on young cotton foliage.',
      te: 'లేత పత్తి ఆకులపై రసం పీల్చే తెల్లదోమ (Whitefly) ద్వారా ఈ వైరస్ వ్యాపిస్తుంది.',
      hi: 'नई कपास की पत्तियों पर रस चूसने वाली सफेद मक्खी (व्हाइटफ्लाई) द्वारा फैलने वाला वायरस रोग।',
    },
    simpleLikelyCause: {
      en: 'Virus spread by whiteflies feeding on tender cotton leaves.',
      te: 'లేత ఆకులపై వాలే తెల్లదోమ ద్వారా వ్యాపించే వైరస్.',
      hi: 'सफेद मक्खी के रस चूसने से फैलने वाला वायरस।',
    },
    safeActions: {
      en: [
        'Inspect undersides of cotton leaves closely for whiteflies and nymphs',
        'Clear host weeds (such as wild hibiscus/okra relatives and field-edge weeds) around the field',
        'Use yellow sticky traps along borders to monitor whitefly pressure',
        'Consult local agriculture extension guidance for safe, approved whitefly management',
      ],
      te: [
        'పత్తి ఆకుల అడుగు భాగంలో తెల్లదోమ ఉన్నాయో జాగ్రత్తగా గమనించండి',
        'పొలం గట్ల చుట్టూ తెల్లదోమకు ఆశ్రయం ఇచ్చే కలుపు మొక్కలను శుభ్రం చేయండి',
        'తెల్లదోమ ఉధృతిని గమనించడానికి పొలం అంచుల్లో పసుపు జిగురు అట్టలు అమర్చండి',
        'సురక్షితమైన తెల్లదోమ నివారణ కోసం స్థానిక వ్యవసాయ అధికారి సలహా తీసుకోండి',
      ],
      hi: [
        'कपास के पत्तों के नीचे सफेद मक्खी और उसके शिशुओं की जांच करें',
        'खेत की मेड़ों से सफेद मक्खी को पनाह देने वाले खरपतवार साफ करें',
        'निगरानी के लिए खेत के किनारों पर पीले चिपचिपे जाल लगाएं',
        'सुरक्षित प्रबंधन के लिए स्थानीय कृषि विस्तार अधिकारी से सलाह लें',
      ],
    },
    simpleSafeActions: {
      en: [
        'Check leaf undersides for whiteflies',
        'Remove weeds along field borders',
        'Set up yellow sticky monitoring cards',
        'Follow local agriculture officer advice',
      ],
      te: [
        'ఆకుల కింద తెల్లదోమ ఉన్నాయో చూడండి',
        'గట్లపై కలుపు మొక్కలు తీసేయండి',
        'పసుపు జిగురు అట్టలు పెట్టండి',
        'వ్యవసాయ అధికారి సలహా పాటించండి',
      ],
      hi: [
        'पत्तों के नीचे सफेद मक्खी देखें',
        'मेड़ों के खरपतवार साफ करें',
        'पीले चिपचिपे कार्ड लगाएं',
        'कृषि अधिकारी की सलाह मानें',
      ],
    },
    prevention: {
      en: [
        'Choose locally recommended Cotton Leaf Curl-tolerant hybrids',
        'Sow at the recommended regional planting window to avoid peak whitefly buildup',
        'Avoid excessive nitrogen fertilization that attracts whiteflies to lush foliage',
      ],
      te: [
        'ఆకు ముడతను తట్టుకునే స్థానిక సిఫార్సు పత్తి రకాలను ఎంచుకోండి',
        'తెల్లదోమ ఉధృతి తక్కువగా ఉండే సరైన సమయంలోనే విత్తనాలు వేయండి',
        'అధిక నత్రజని ఎరువులు వాడకుండా సమతుల్యంగా వేయండి',
      ],
      hi: [
        'रोग-सहनशील स्थानीय अनुशंसित कपास किस्मों की बुवाई करें',
        'सफेद मक्खी के प्रकोप से बचने के लिए सही समय पर बुवाई करें',
        'अधिक नाइट्रोजन खाद न डालें ताकि कोमल पत्तियां कीटों को आकर्षित न करें',
      ],
    },
    simplePrevention: {
      en: [
        'Plant tolerant cotton varieties',
        'Sow on time in your region',
        'Avoid overusing nitrogen fertilizer',
      ],
      te: [
        'తెగులు తట్టుకునే పత్తి రకాలు వేయండి',
        'సరైన సీజన్ సమయంలో విత్తండి',
        'ఎక్కువ యూరియా వాడకండి',
      ],
      hi: [
        'सहनशील कपास किस्म चुनें',
        'सही समय पर बुवाई करें',
        'ज्यादा यूरिया डालने से बचें',
      ],
    },
    whenToSeekHelp: {
      en: 'Contact an agriculture officer promptly if young cotton plants show thickened curling veins or whitefly counts rise rapidly.',
      te: 'లేత పత్తి మొక్కలలో ఆకు ఈనెలు మందంగా మారి ముడుచుకున్నా లేదా తెల్లదోమ ఎక్కువైనా వెంటనే వ్యవసాయ అధికారిని కలవండి.',
      hi: 'यदि छोटे कपास के पौधों में नसें मोटी होकर पत्ते मुड़ने लगें या सफेद मक्खी तेजी से बढ़े, तो तुरंत कृषि अधिकारी से मिलें।',
    },
    simpleWhenToSeekHelp: {
      en: 'Talk to an expert early if curling and whiteflies appear on young cotton.',
      te: 'లేత పత్తిలో ముడత మరియు తెల్లదోమ కనిపిస్తే వెంటనే నిపుణులను కలవండి.',
      hi: 'छोटी कपास में मुड़न और सफेद मक्खी दिखे तो तुरंत विशेषज्ञ से मिलें।',
    },
  },
  {
    id: 'Bacterial Blight',
    crop: 'Cotton',
    name: {
      en: 'Bacterial Blight',
      te: 'పత్తి కోణీయ ఆకు మచ్చ తెగులు (Bacterial Blight)',
      hi: 'कपास का जीवाणु अंगमारी / कोणीय धब्बा रोग (Bacterial Blight)',
    },
    summary: {
      en: 'Angular water-soaked spots bounded by leaf veins that turn dark brown or black on cotton leaves.',
      te: 'పత్తి ఆకులపై ఈనెల మధ్యలో కోణాల ఆకారంలో నీటిలో నానినట్లుండే మచ్చలు ఏర్పడి నల్లగా మారుతాయి.',
      hi: 'कपास के पत्तों पर नसों से घिरे कोणीय आकार के पानी से भीगे धब्बे बनते हैं जो बाद में गहरे काले हो जाते हैं।',
    },
    simpleSummary: {
      en: 'Angular dark spots trapped between cotton leaf veins.',
      te: 'పత్తి ఆకు ఈనెల మధ్య కోణాల ఆకారంలో నల్ల మచ్చలు.',
      hi: 'कपास के पत्ते की नसों के बीच कोणीय काले धब्बे।',
    },
    symptoms: {
      en: [
        'Small angular water-soaked spots delimited by tiny leaf veins',
        'Lesions turn dark brown to black and may follow main veins ("black arm" / vein blight)',
        'Severely affected leaves yellow and drop early',
      ],
      te: [
        'ఆకు ఈనెల మధ్యలో కోణాల ఆకారంలో నీటి-నానిన చిన్న మచ్చలు',
        'మచ్చలు ముదురు గోధుమ లేదా నలుపు రంగులోకి మారి ప్రధాన ఈనెల వెంబడి వ్యాపించడం',
        'తీవ్రమైన ఆకులు పసుపు రంగులోకి మారి రాలిపోవడం',
      ],
      hi: [
        'छोटी नसों से बंधे कोणीय आकार के पानी से भीगे धब्बे',
        'धब्बों का गहरा भूरा-काला पड़ना और मुख्य नसों के साथ फैलना',
        'अधिक प्रभावित पत्तों का पीला होकर समय से पहले झड़ना',
      ],
    },
    simpleSymptoms: {
      en: [
        'Sharp-cornered dark spots on leaves',
        'Dark streaks along leaf veins',
        'Spotted leaves turn yellow and drop',
      ],
      te: [
        'ఆకులపై కోణాల ఆకారపు నల్ల మచ్చలు',
        'ఆకు ఈనెల వెంట నల్లని చారలు',
        'ఆకులు పసుపుగా మారి రాలిపోతాయి',
      ],
      hi: [
        'पत्तों पर चौकोर-कोणीय काले धब्बे',
        'पत्ते की नसों पर काली धारियां',
        'धब्बेदार पत्ते पीले होकर गिरते हैं',
      ],
    },
    likelyCause: {
      en: 'Bacterial infection carried on uncleaned seed or crop residue and spread rapidly by wind-driven rain splashes.',
      te: 'శుభ్రం చేయని విత్తనాలు లేదా పాత పత్తి అవశేషాల ద్వారా ఉండి, గాలితో కూడిన వర్షపు తుంపర్ల వల్ల ఈ బ్యాక్టీరియా వేగంగా వ్యాపిస్తుంది.',
      hi: 'संक्रमित बीज या पुराने पौधों के अवशेषों में मौजूद जीवाणु हवा और बारिश के छींटों से तेजी से फैलते हैं।',
    },
    simpleLikelyCause: {
      en: 'Bacteria spread during wind-blown rain from leftover debris or seed.',
      te: 'పాత పంట అవశేషాల నుండి గాలి వాన తుంపర్ల ద్వారా వ్యాపించే బ్యాక్టీరియా.',
      hi: 'हवा और बारिश के छींटों से पुराने अवशेषों या बीज द्वारा फैलने वाले जीवाणु।',
    },
    safeActions: {
      en: [
        'Avoid field operations when cotton foliage is wet after rain or dew',
        'Ensure excess rainwater drains cleanly from cotton rows',
        'Remove severely affected lower leaves or early isolated plants if practical',
        'Consult a local agriculture officer if vein darkening or stem lesions appear',
      ],
      te: [
        'వర్షం లేదా మంచుతో ఆకులు తడిగా ఉన్నప్పుడు పొలంలో పనులు చేయడం మానుకోండి',
        'పత్తి వరుసలలో వర్షపు నీరు నిలవకుండా బయటకు వెళ్ళేలా చూడండి',
        'మొదట్లోనే ఒకటి రెండు మొక్కలలో ఉంటే వాటిని జాగ్రత్తగా తొలగించండి',
        'ఈనెలు నల్లబడటం లేదా కొమ్మలపై మచ్చలు కనిపిస్తే వ్యవసాయ అధికారి సలహా తీసుకోండి',
      ],
      hi: [
        'बारिश या ओस से पौधे गीले हों तो खेत में काम करने से बचें',
        'कपास की कतारों से अतिरिक्त बारिश का पानी निकलने का रास्ता रखें',
        'शुरुआत में बहुत प्रभावित निचले पत्तों को सावधानी से हटाएं',
        'नसें काली पड़ने या टहनी पर धब्बे दिखने पर कृषि अधिकारी से सलाह लें',
      ],
    },
    simpleSafeActions: {
      en: [
        'Keep out of wet cotton rows',
        'Drain standing rainwater',
        'Contact agriculture officer if veins blacken',
      ],
      te: [
        'తడి పత్తి పొలంలో తిరగకండి',
        'నిలిచిన వర్షపు నీటిని బయటకు పంపండి',
        'ఈనెలు నల్లబడితే అధికారిని కలవండి',
      ],
      hi: [
        'गीली फसल में काम न करें',
        'रुका हुआ बारिश का पानी निकालें',
        'नसें काली पड़ें तो अधिकारी से मिलें',
      ],
    },
    prevention: {
      en: [
        'Plant certified acid-delinted, clean cotton seed',
        'Destroy and plow down cotton stalks cleanly after harvest; do not leave ratoon plants',
        'Rotate cotton with non-host crops like sorghum, maize, or pulses',
      ],
      te: [
        'శుభ్రమైన సర్టిఫైడ్ విత్తనాలను మాత్రమే నాటండి',
        'కోత తర్వాత పాత పత్తి కట్టెలను పూర్తిగా తొలగించండి',
        'మొక్కజొన్న, జొన్న లేదా పప్పుధాన్యాలతో పంట మార్పిడి చేయండి',
      ],
      hi: [
        'प्रमाणित और साफ कपास के बीज ही बोएं',
        'कटाई के बाद कपास के पुराने डंठल खेत से पूरी तरह हटा दें',
        'मक्का, ज्वार या दलहन के साथ फसल चक्र अपनाएं',
      ],
    },
    simplePrevention: {
      en: [
        'Use clean certified seed',
        'Remove old cotton stalks after harvest',
        'Rotate with maize or pulses',
      ],
      te: [
        'మంచి సర్టిఫైడ్ విత్తనాలు వాడండి',
        'కోత తర్వాత పాత పత్తి కట్టెలు తీసేయండి',
        'మొక్కజొన్న లేదా పప్పు పంటలతో మార్పిడి చేయండి',
      ],
      hi: [
        'प्रमाणित साफ बीज बोएं',
        'कटाई के बाद पुराने डंठल हटाएं',
        'मक्का या दाल के साथ फसल बदलें',
      ],
    },
    whenToSeekHelp: {
      en: 'Seek expert guidance promptly if angular spots spread onto stems ("black arm") or young cotton bolls.',
      te: 'మచ్చలు కొమ్మలకు లేదా లేత కాయలకు వ్యాపిస్తే వెంటనే వ్యవసాయ నిపుణులను సంప్రదించండి.',
      hi: 'यदि कोणीय धब्बे तने (ब्लैक आर्म) या कच्चे टिंडों तक फैलें तो तुरंत कृषि विशेषज्ञ से सलाह लें।',
    },
    simpleWhenToSeekHelp: {
      en: 'Get expert help if dark lesions spread onto branches or bolls.',
      te: 'కొమ్మలు లేదా కాయలపై నల్ల మచ్చలు వస్తే నిపుణులను కలవండి.',
      hi: 'टहनियों या टिंडों पर काले धब्बे दिखें तो विशेषज्ञ से मिलें।',
    },
  },
  {
    id: 'Alternaria Leaf Spot',
    crop: 'Cotton',
    name: {
      en: 'Alternaria Leaf Spot',
      te: 'పత్తి ఆకు మచ్చ తెగులు (Alternaria Leaf Spot)',
      hi: 'कपास का अल्टरनेरिया पत्ती धब्बा (Alternaria Leaf Spot)',
    },
    summary: {
      en: 'Circular brown spots with target-like rings and dry papery centers on mature cotton leaves.',
      te: 'ముదిరిన పత్తి ఆకులపై వలయాల ఆకారంలో గోధుమ మచ్చలు ఏర్పడి మధ్య భాగం ఎండినట్లు కనిపిస్తుంది.',
      hi: 'कपास के पुराने पत्तों पर छल्लेदार गोल भूरे धब्बे बनते हैं जिनका बीच का हिस्सा सूख जाता है।',
    },
    simpleSummary: {
      en: 'Brown circular ringed spots on older cotton leaves.',
      te: 'పాత పత్తి ఆకులపై వలయాలతో కూడిన గోధుమ మచ్చలు.',
      hi: 'पुराने कपास के पत्तों पर छल्लेदार गोल भूरे धब्बे।',
    },
    symptoms: {
      en: [
        'Small brown circular spots with purple margins on lower mature leaves',
        'Concentric rings develop as spots enlarge, leaving papery centers that may tear',
        'Premature leaf shedding in heavily spotted lower canopy',
      ],
      te: [
        'కింది ముదిరిన ఆకులపై ఊదా అంచు గల చిన్న గోధుమ మచ్చలు',
        'మచ్చలు పెద్దవైన కొద్దీ వలయాలు ఏర్పడి మధ్యలో ఎండి చిరిగిపోవడం',
        'మచ్చలు ఎక్కువైతే కింది ఆకులు ముందుగానే రాలిపోవడం',
      ],
      hi: [
        'निचले पुराने पत्तों पर बैंगनी-भूरे किनारे वाले छोटे गोल धब्बे',
        'धब्बे बढ़ने पर छल्ले बनना और बीच का सूखा हिस्सा फटना',
        'अधिक धब्बों से निचले पत्तों का समय से पहले गिरना',
      ],
    },
    simpleSymptoms: {
      en: [
        'Brown round spots with rings',
        'Dry papery centers in larger spots',
        'Lower leaves drop early',
      ],
      te: [
        'వలయాలతో గోధుమ గుండ్రని మచ్చలు',
        'పెద్ద మచ్చల మధ్య భాగం ఎండిపోతుంది',
        'కింది ఆకులు త్వరగా రాలుతాయి',
      ],
      hi: [
        'छल्लेदार गोल भूरे धब्बे',
        'बड़े धब्बों का बीच का हिस्सा सूखकर फटता है',
        'निचले पत्ते जल्दी गिरते हैं',
      ],
    },
    likelyCause: {
      en: 'Fungal leaf spotting favored by warm humid weather, heavy dew, and potassium or general nutrient stress during boll filling.',
      te: 'వెచ్చని తేమ వాతావరణం, ఎక్కువ మంచు మరియు కాయ ఊరే దశలో పొటాష్ లేదా పోషకాల లోపం ఉన్నప్పుడు ఈ శిలీంధ్ర మచ్చలు పెరుగుతాయి.',
      hi: 'गर्म-नम मौसम, अधिक ओस और टिंडे भरने के समय पोटाश या पोषक तत्वों की कमी से यह फफूंद रोग बढ़ता है।',
    },
    simpleLikelyCause: {
      en: 'Fungal spotting during humid weather, especially when plants face nutrient stress.',
      te: 'తేమ వాతావరణంలో మరియు పోషకాల లోపం ఉన్న మొక్కలపై వచ్చే శిలీంధ్రం.',
      hi: 'नमी और पोषण की कमी होने पर पत्तों पर लगने वाला फफूंद रोग।',
    },
    safeActions: {
      en: [
        'Improve airflow by clearing dense weeds between cotton rows',
        'Avoid wetting foliage; keep irrigation steady without sudden drought-to-flood swings',
        'Check potassium/soil nutrition with local agriculture guidance',
      ],
      te: [
        'వరుసల మధ్య దట్టంగా ఉన్న కలుపును తీసి గాలి బాగా ఆడేలా చూడండి',
        'నీటి ఎద్దడి లేకుండా సమతుల్యంగా నీరు పెట్టండి',
        'స్థానిక వ్యవసాయ సలహాతో పొటాష్/పోషకాల లోపాన్ని సరిచేయండి',
      ],
      hi: [
        'कतारों के बीच के खरपतवार साफ कर हवा का बहाव बढ़ाएं',
        'सिंचाई संतुलित रखें ताकि पौधे को पानी का झटका न लगे',
        'स्थानीय कृषि सलाह से पोटाश और पोषण की कमी की जांच करें',
      ],
    },
    simpleSafeActions: {
      en: [
        'Weed between cotton rows for airflow',
        'Keep soil moisture steady',
        'Check plant nutrition locally',
      ],
      te: [
        'గాలి ఆడేలా వరుసల మధ్య కలుపు తీయండి',
        'నేల తేమ స్థిరంగా ఉంచండి',
        'పోషకాల గురించి అధికారిని అడగండి',
      ],
      hi: [
        'हवा के लिए कतारों से घास हटाएं',
        'खेत की नमी संतुलित रखें',
        'पोषक तत्वों की जांच कराएं',
      ],
    },
    prevention: {
      en: [
        'Clean and incorporate or remove cotton residues after final picking',
        'Ensure balanced potassium and nitrogen application for strong leaves',
        'Rotate cotton with cereals or legumes in subsequent seasons',
      ],
      te: [
        'చివరి పత్తి ఏరివేత తర్వాత పంట అవశేషాలను పొలం నుండి శుభ్రం చేయండి',
        'ఆకులు బలంగా ఉండేందుకు సమతుల్య నత్రజని, పొటాష్ ఎరువులు వేయండి',
        'తదుపరి సీజన్‌లో తృణధాన్యాలు లేదా పప్పుధాన్యాలతో పంట మార్పిడి చేయండి',
      ],
      hi: [
        'आखिरी तुड़ाई के बाद कपास के अवशेष खेत से साफ करें',
        'मजबूत पत्तियों के लिए संतुलित नाइट्रोजन और पोटाश दें',
        'अगले मौसम में अनाज या दलहन से फसल चक्र अपनाएं',
      ],
    },
    simplePrevention: {
      en: [
        'Clear old stalks after picking',
        'Give balanced potash and nitrogen',
        'Rotate crops next season',
      ],
      te: [
        'పంట తర్వాత పాత మొక్కలు శుభ్రం చేయండి',
        'సమతుల్య పొటాష్, నత్రజని వేయండి',
        'వచ్చేసారి వేరే పంట వేయండి',
      ],
      hi: [
        'तुड़ाई के बाद पुराने पौधे हटाएं',
        'संतुलित पोटाश और नाइट्रोजन दें',
        'अगली बार फसल बदलें',
      ],
    },
    whenToSeekHelp: {
      en: 'Seek agriculture advice if defoliation spreads rapidly upward before bolls mature.',
      te: 'కాయలు పండక ముందే ఆకులు పైవరకు వేగంగా రాలిపోతుంటే వ్యవసాయ అధికారిని సంప్రదించండి.',
      hi: 'यदि टिंडे पकने से पहले ऊपरी पत्तों का झड़ना तेजी से बढ़े, तो कृषि अधिकारी से सलाह लें।',
    },
    simpleWhenToSeekHelp: {
      en: 'Ask an expert if middle and upper leaves start dropping early.',
      te: 'మధ్య, పై ఆకులు ముందుగానే రాలిపోతుంటే నిపుణులను అడగండి.',
      hi: 'ऊपर के पत्ते जल्दी गिरने लगें तो विशेषज्ञ से पूछें।',
    },
  },

  // =========================================================================
  // 6. MAIZE
  // =========================================================================
  {
    id: 'Northern Corn Leaf Blight',
    crop: 'Maize',
    name: {
      en: 'Northern Corn Leaf Blight',
      te: 'మొక్కజొన్న ఆకు ఎండు తెగులు (Northern Corn Leaf Blight)',
      hi: 'मक्का का उत्तरी पर्ण झुलसा (Northern Corn Leaf Blight)',
    },
    summary: {
      en: 'Long, elliptical gray-green to tan cigar-shaped lesions running lengthwise on maize leaves.',
      te: 'మొక్కజొన్న ఆకులపై పొడవుగా, సిగార్ లేదా పడవ ఆకారంలో బూడిద-ఆకుపచ్చ నుండి లేత గోధుమ రంగు మచ్చలు కనిపిస్తాయి.',
      hi: 'मक्का के पत्तों पर लंबाई में सिगार के आकार के लंबे स्लेटी-हरे या हल्के भूरे धब्बे बनते हैं।',
    },
    simpleSummary: {
      en: 'Long cigar-shaped gray-tan lesions along maize leaves.',
      te: 'మొక్కజొన్న ఆకులపై పొడవైన పడవ ఆకారపు బూడిద-గోధుమ మచ్చలు.',
      hi: 'मक्का के पत्तों पर लंबे सिगार जैसे स्लेटी-भूरे धब्बे।',
    },
    symptoms: {
      en: [
        'Long elliptical or cigar-shaped lesions (often 2.5–15 cm long)',
        'Lesions begin gray-green and turn tan or straw-brown as they mature',
        'Lower leaves affected first, progressing upward in cool humid weather',
      ],
      te: [
        'ఆకు పొడవు వెంబడి పెద్ద సిగార్ ఆకారపు దీర్ఘవృత్తాకార మచ్చలు',
        'ముందు బూడిద-ఆకుపచ్చగా ఉండి తర్వాత లేత గోధుమ రంగులోకి మారడం',
        'ముందు కింది ఆకులపై వచ్చి చల్లని తేమ వాతావరణంలో పైకి వ్యాపించడం',
      ],
      hi: [
        'पत्तों पर लंबे सिगार के आकार के बड़े धब्बे',
        'धब्बे शुरू में स्लेटी-हरे और बाद में हल्के भूरे-पुआल जैसे दिखना',
        'पहले नीचे के पत्तों पर शुरू होकर ठंडे-नम मौसम में ऊपर बढ़ना',
      ],
    },
    simpleSymptoms: {
      en: [
        'Long boat or cigar-shaped tan patches',
        'Starts on lower leaves first',
        'Patches dry up leaf blades',
      ],
      te: [
        'పొడవైన పడవ ఆకారపు గోధుమ మచ్చలు',
        'ముందు కింది ఆకులపై మొదలవుతుంది',
        'ఆకులు ఎండిపోతాయి',
      ],
      hi: [
        'लंबे सिगार जैसे भूरे धब्बे',
        'पहले नीचे के पत्तों पर दिखता है',
        'पत्ते सूखने लगते हैं',
      ],
    },
    likelyCause: {
      en: 'Fungal infection surviving on leftover maize stalks and favored by mild temperatures, heavy morning dew, and frequent rain.',
      te: 'పాత మొక్కజొన్న కర్రల అవశేషాలపై ఉండే శిలీంధ్రం చల్లని ఉష్ణోగ్రతలు, ఉదయం మంచు మరియు వర్షాల వల్ల వ్యాపిస్తుంది.',
      hi: 'पिछली मक्का फसल के डंठलों में रहने वाली फफूंद जो हल्की ठंड, सुबह की ओस और बारिश में तेजी से फैलती है।',
    },
    simpleLikelyCause: {
      en: 'Fungus from old maize residue spreading in cool, dewy, or rainy weather.',
      te: 'పాత మొక్కజొన్న అవశేషాల నుండి మంచు, వర్షపు రోజుల్లో వచ్చే శిలీంధ్రం.',
      hi: 'पुराने डंठलों से ओस और बारिश वाले मौसम में फैलती फफूंद।',
    },
    safeActions: {
      en: [
        'Monitor ear-leaf and upper leaves closely as grain filling depends on upper foliage',
        'Keep furrows drained so excessive humidity does not linger around lower stalks',
        'Remove grassy weeds and consult a local agriculture officer before tasseling if spots spread upward',
      ],
      te: [
        'కంకి దశలో ధాన్యం గింజ పట్టడానికి పై ఆకులు కీలకం కాబట్టి వాటిని జాగ్రత్తగా గమనించండి',
        'పొలంలో అదనపు తేమ నిలవకుండా నీటి పారుదల సరిగ్గా ఉంచండి',
        'మచ్చలు పై ఆకులకు వ్యాపిస్తుంటే స్థానిక వ్యవసాయ అధికారి సలహా తీసుకోండి',
      ],
      hi: [
        'भुट्टे के पास और ऊपरी पत्तों की नियमित जांच करें क्योंकि दाने भरने के लिए ये जरूरी हैं',
        'खेत में जलभराव न होने दें ताकि नमी कम रहे',
        'धब्बे ऊपर की ओर बढ़ें तो स्थानीय कृषि अधिकारी से सलाह लें',
      ],
    },
    simpleSafeActions: {
      en: [
        'Check leaves near the cob closely',
        'Ensure good field drainage',
        'Ask agriculture officer if spreading upward',
      ],
      te: [
        'కంకి దగ్గరి ఆకులను జాగ్రత్తగా చూడండి',
        'నీరు నిలవకుండా చూడండి',
        'పై ఆకులకు వ్యాపిస్తే అధికారిని అడగండి',
      ],
      hi: [
        'भुट्टे के पास के पत्ते ध्यान से देखें',
        'खेत में पानी न रुकने दें',
        'ऊपर फैलने पर कृषि अधिकारी से मिलें',
      ],
    },
    prevention: {
      en: [
        'Choose locally recommended blight-tolerant maize hybrids',
        'Rotate maize with pulses, oilseeds, or vegetables rather than continuous maize',
        'Manage or compost leftover maize stalks cleanly after harvest',
      ],
      te: [
        'తెగులు తట్టుకునే స్థానిక మొక్కజొన్న హైబ్రిడ్ రకాలను ఎంచుకోండి',
        'వరుసగా మొక్కజొన్న వేయకుండా పప్పుధాన్యాలు లేదా నూనెగింజలతో పంట మార్పిడి చేయండి',
        'కోత తర్వాత పాత మొక్కజొన్న కర్రలను పొలంలో ఉంచకుండా శుభ్రం చేయండి',
      ],
      hi: [
        'रोग-रोधी स्थानीय अनुशंसित मक्का संकर किस्में लगाएं',
        'लगातार मक्का बोने के बजाय दलहन या तिलहन से फसल चक्र करें',
        'कटाई के बाद पुराने डंठलों को खेत से हटाएं या खाद में सड़ाएं',
      ],
    },
    simplePrevention: {
      en: [
        'Plant tolerant maize hybrids',
        'Rotate with pulses or oilseeds',
        'Clear old stalks after harvest',
      ],
      te: [
        'తెగులు తట్టుకునే హైబ్రిడ్ రకాలు వేయండి',
        'పప్పు లేదా నూనెగింజ పంటలతో మార్పిడి చేయండి',
        'కోత తర్వాత పాత కర్రలు తీసేయండి',
      ],
      hi: [
        'सहनशील मक्का किस्में बोएं',
        'दाल या तिलहन से फसल बदलें',
        'कटाई के बाद पुराने डंठल साफ करें',
      ],
    },
    whenToSeekHelp: {
      en: 'Seek qualified agriculture advice if large lesions appear on the ear leaf or upper leaves around tasseling and silking.',
      te: 'పూత మరియు కంకి వచ్చే సమయంలో కంకి ఆకు లేదా పై ఆకులపై పెద్ద మచ్చలు కనిపిస్తే వెంటనే వ్యవసాయ నిపుణులను కలవండి.',
      hi: 'यदि भुट्टा या रेशे निकलते समय भुट्टे वाली पत्ती या ऊपरी पत्तों पर बड़े धब्बे दिखें, तो तुरंत कृषि विशेषज्ञ से मिलें।',
    },
    simpleWhenToSeekHelp: {
      en: 'Get expert advice if lesions reach the cob leaf during flowering.',
      te: 'పూత దశలో కంకి ఆకుపై మచ్చలు వస్తే నిపుణులను కలవండి.',
      hi: 'फूल आते समय भुट्टे वाले पत्ते पर धब्बे आएं तो विशेषज्ञ से मिलें।',
    },
  },
  {
    id: 'Common Rust',
    crop: 'Maize',
    name: {
      en: 'Common Rust',
      te: 'మొక్కజొన్న కుంకుమ / తుప్పు తెగులు (Common Rust)',
      hi: 'मक्का का सामान्य रतुआ / गेरुआ रोग (Common Rust)',
    },
    summary: {
      en: 'Small cinnamon-brown raised powdery pustules scattered on both upper and lower surfaces of maize leaves.',
      te: 'మొక్కజొన్న ఆకుల పై మరియు కింది భాగాలలో దాల్చిన చెక్క లేదా తుప్పు రంగులో చిన్న ఉబ్బెత్తు పొక్కులు కనిపిస్తాయి.',
      hi: 'मक्का के पत्तों की ऊपरी और निचली दोनों सतहों पर दालचीनी-भूरे रंग के छोटे उभरे हुए पाउडर जैसे दाने दिखते हैं।',
    },
    simpleSummary: {
      en: 'Rust-colored powdery bumps on both sides of maize leaves.',
      te: 'మొక్కజొన్న ఆకు రెండు వైపులా తుప్పు రంగు పొడి పొక్కులు.',
      hi: 'मक्का के पत्ते के दोनों तरफ जंग जैसे भूरे पाउडर के दाने।',
    },
    symptoms: {
      en: [
        'Small oval cinnamon-brown pustules bursting through the leaf epidermis',
        'Pustules appear on both upper and lower leaf surfaces and release rusty dust when rubbed',
        'Heavy infection can cause leaf yellowing and early drying',
      ],
      te: [
        'ఆకు ఉపరితలంపై పగిలినట్లుండే చిన్న గోధుమ/తుప్పు రంగు పొక్కులు',
        'ఆకు పై మరియు కింది రెండు వైపులా కనిపించి చేతితో రాస్తే తుప్పు పొడి అంటుతుంది',
        'తీవ్రమైతే ఆకులు పసుపుగా మారి ముందుగానే ఎండిపోతాయి',
      ],
      hi: [
        'पत्ते की सतह को चीरकर निकलने वाले छोटे भूरे-दालचीनी रंग के दाने',
        'पत्ते के ऊपर और नीचे दोनों तरफ दाने, जिन्हें छूने पर जंग जैसा पाउडर लगता है',
        'अधिक संक्रमण से पत्ते पीले पड़कर जल्दी सूख जाते हैं',
      ],
    },
    simpleSymptoms: {
      en: [
        'Rust-brown raised bumps on leaves',
        'Leaves rusty dust when touched',
        'Yellowing around heavy patches',
      ],
      te: [
        'ఆకులపై తుప్పు రంగు ఉబ్బెత్తు పొక్కులు',
        'తాకితే చేతికి తుప్పు పొడి అంటుతుంది',
        'ఎక్కువైతే ఆకులు పసుపు రంగులోకి మారతాయి',
      ],
      hi: [
        'पत्तों पर जंग जैसे उभरे दाने',
        'छूने पर हाथ में भूरा पाउडर लगता है',
        'ज्यादा होने पर पत्ते पीले पड़ते हैं',
      ],
    },
    likelyCause: {
      en: 'Wind-borne rust fungal spores thriving during cool, humid conditions and overnight dew.',
      te: 'గాలి ద్వారా వచ్చే తుప్పు శిలీంధ్ర బీజాంశాలు చల్లని, తేమ వాతావరణం మరియు రాత్రి మంచులో వేగంగా పెరుగుతాయి.',
      hi: 'हवा से उड़कर आने वाले रतुआ फफूंद के बीजाणु ठंडे-नम मौसम और रात की ओस में तेजी से बढ़ते हैं।',
    },
    simpleLikelyCause: {
      en: 'Wind-carried rust spores growing on leaves in cool, dewy weather.',
      te: 'గాలి ద్వారా వచ్చి చల్లని మంచు వాతావరణంలో పెరిగే తుప్పు శిలీంధ్రం.',
      hi: 'हवा से आए रतुआ बीजाणु ठंड व ओस में पत्तों पर पनपते हैं।',
    },
    safeActions: {
      en: [
        'Check whether pustules are confined to older lower leaves or spreading to the upper canopy',
        'Maintain good airflow and avoid unnecessary overhead irrigation in cool weather',
        'Consult a local agriculture officer if young maize before silking shows heavy rust pustules',
      ],
      te: [
        'తుప్పు పొక్కులు కింది ఆకులకే పరిమితమయ్యాయా లేదా పై ఆకులకు వస్తున్నాయా గమనించండి',
        'మొక్కల మధ్య గాలి బాగా ఆడేలా చూసి, చల్లని వేళల్లో పైనుండి నీరు పోయకండి',
        'కంకి దశకు ముందే లేత పైరులో ఎక్కువగా ఉంటే స్థానిక వ్యవసాయ అధికారి సలహా తీసుకోండి',
      ],
      hi: [
        'जांचें कि दाने केवल निचले पत्तों तक हैं या ऊपरी पत्तों पर भी फैल रहे हैं',
        'हवा का बहाव अच्छा रखें और ठंड में ऊपर से छिड़काव न करें',
        'यदि भुट्टा निकलने से पहले ही रतुआ तेजी से बढ़े तो कृषि अधिकारी से सलाह लें',
      ],
    },
    simpleSafeActions: {
      en: [
        'Check if upper leaves are affected',
        'Keep foliage dry and well ventilated',
        'Ask local officer if young plants are heavily rusted',
      ],
      te: [
        'పై ఆకులకు వ్యాపించిందో చూడండి',
        'ఆకులపై తడి లేకుండా గాలి ఆడనివ్వండి',
        'లేత మొక్కల్లో ఎక్కువైతే అధికారిని అడగండి',
      ],
      hi: [
        'देखें कि ऊपर के पत्ते प्रभावित हैं या नहीं',
        'पत्तों को सूखा और हवादार रखें',
        'छोटे पौधों में ज्यादा दिखे तो अधिकारी से पूछें',
      ],
    },
    prevention: {
      en: [
        'Grow locally adapted rust-resistant maize hybrids',
        'Plant within the recommended sowing window to avoid cool peak-rust periods',
        'Support balanced crop nutrition so foliage stays resilient',
      ],
      te: [
        'తుప్పు తెగులును తట్టుకునే స్థానిక మొక్కజొన్న రకాలను సాగు చేయండి',
        'సరైన విత్తన సమయాన్ని పాటించి చలి తీవ్రత ఉన్న దశను నివారించండి',
        'సమతుల్య పోషకాలతో పంటను ఆరోగ్యంగా ఉంచండి',
      ],
      hi: [
        'रतुआ-रोधी अनुशंसित मक्का किस्में उगाएं',
        'सही बुवाई समय अपनाएं ताकि ठंड में रोग का प्रकोप टले',
        'फसल को मजबूत रखने के लिए संतुलित पोषण दें',
      ],
    },
    simplePrevention: {
      en: [
        'Pick rust-resistant maize hybrids',
        'Sow during recommended dates',
        'Maintain balanced soil nutrients',
      ],
      te: [
        'తుప్పు తట్టుకునే మొక్కజొన్న రకాలు వేయండి',
        'సరైన సమయంలో విత్తనాలు వేయండి',
        'సమతుల్య ఎరువులు వాడండి',
      ],
      hi: [
        'रतुआ-रोधी किस्में चुनें',
        'सही समय पर बुवाई करें',
        'संतुलित खाद दें',
      ],
    },
    whenToSeekHelp: {
      en: 'Contact an agriculture expert if powdery rust pustules cover more than a few lower leaves prior to pollination.',
      te: 'పరాగసంపర్కం జరిగే దశకు ముందే కింది ఆకులను దాటి పై ఆకులపై తుప్పు పొక్కులు వ్యాపిస్తే నిపుణులను సంప్రదించండి.',
      hi: 'परागण से पहले ही यदि रतुआ के दाने निचले पत्तों से ऊपर की पत्तियों तक फैल जाएं, तो कृषि विशेषज्ञ से सलाह लें।',
    },
    simpleWhenToSeekHelp: {
      en: 'Seek expert guidance if rust spreads heavily before flowering.',
      te: 'పూతకు ముందే తుప్పు ఎక్కువైతే నిపుణుల సలహా తీసుకోండి.',
      hi: 'फूल आने से पहले रतुआ ज्यादा फैले तो विशेषज्ञ से मिलें।',
    },
  },
  {
    id: 'Gray Leaf Spot',
    crop: 'Maize',
    name: {
      en: 'Gray Leaf Spot',
      te: 'మొక్కజొన్న బూడిద ఆకు మచ్చ తెగులు (Gray Leaf Spot)',
      hi: 'मक्का का स्लेटी पत्ती धब्बा (Gray Leaf Spot)',
    },
    summary: {
      en: 'Rectangular, straight-edged tan to gray spots restricted cleanly between parallel maize leaf veins.',
      te: 'మొక్కజొన్న ఆకు ఈనెల మధ్య సమాంతరంగా నిటారు అంచులతో కూడిన దీర్ఘచతురస్రాకార బూడిద లేదా లేత గోధుమ మచ్చలు.',
      hi: 'मक्का के पत्ते की समानांतर नसों के बीच सीधे किनारों वाले आयताकार स्लेटी या हल्के भूरे धब्बे बनते हैं।',
    },
    simpleSummary: {
      en: 'Rectangular gray-tan spots lined up neatly between maize leaf veins.',
      te: 'ఆకు ఈనెల మధ్య నిటారుగా దీర్ఘచతురస్రాకార బూడిద మచ్చలు.',
      hi: 'पत्ते की नसों के बीच चौकोर आयताकार स्लेटी-भूरे धब्बे।',
    },
    symptoms: {
      en: [
        'Narrow rectangular lesions strictly bounded by parallel leaf veins ("matchstick" or blocky look)',
        'Color shifts from tan/brown to distinct ash-gray in humid mornings',
        'Lesions may coalesce into large blighted areas on lower and middle leaves',
      ],
      te: [
        'ఆకు ఈనెల మధ్యలో ఇరుకుగా, నిటారు అంచులతో కూడిన దీర్ఘచతురస్రాకార మచ్చలు',
        'తేమ ఉదయాల్లో లేత గోధుమ రంగు నుండి బూడిద రంగులోకి మారడం',
        'మచ్చలు కలిసిపోయి కింది, మధ్య ఆకులు ఎండిపోవడం',
      ],
      hi: [
        'समानांतर नसों से बंधे संकरे आयताकार धब्बे (माचिस की डिब्बी जैसे चौकोर किनारे)',
        'सुबह की नमी में हल्के भूरे से राख जैसे स्लेटी रंग में बदलना',
        'कई धब्बों के मिलने से निचले और बीच के पत्तों का सूखना',
      ],
    },
    simpleSymptoms: {
      en: [
        'Blocky rectangular spots between veins',
        'Turns pale gray in damp air',
        'Lower leaves blight together',
      ],
      te: [
        'ఈనెల మధ్య చతురస్రాకార మచ్చలు',
        'తేమలో బూడిద రంగులోకి మారతాయి',
        'కింది ఆకులు కలిసి ఎండిపోతాయి',
      ],
      hi: [
        'नसों के बीच चौकोर आयताकार धब्बे',
        'नमी में स्लेटी रंग के दिखते हैं',
        'नीचे के पत्ते मिलकर सूखते हैं',
      ],
    },
    likelyCause: {
      en: 'Fungal residue-borne disease thriving under warm, cloudy, and persistently humid conditions with morning dew.',
      te: 'పాత పంట అవశేషాల నుండి వచ్చే ఈ శిలీంధ్రం వెచ్చని, మబ్బు మరియు ఎక్కువ తేమ ఉండే వాతావరణంలో వేగంగా పెరుగుతుంది.',
      hi: 'फसल के पुराने अवशेषों में रहने वाली यह फफूंद गर्म, बादल और लगातार अधिक नमी वाले मौसम में पनपती है।',
    },
    simpleLikelyCause: {
      en: 'Survives on old maize residue and spreads in warm, cloudy, humid weather.',
      te: 'పాత మొక్కజొన్న అవశేషాల నుండి వెచ్చని తేమ వాతావరణంలో వ్యాపిస్తుంది.',
      hi: 'पुराने डंठलों से गर्म, बादल और नम मौसम में फैलता है।',
    },
    safeActions: {
      en: [
        'Avoid overcrowding and remove dense grassy weeds that trap humidity',
        'Avoid late-evening overhead watering so leaves dry overnight',
        'Inspect upper canopy and ear leaves regularly and consult a local agriculture officer if spreading',
      ],
      te: [
        'తేమను పెంచే దట్టమైన కలుపును తీసి మొక్కల మధ్య గాలి ఆడేలా చూడండి',
        'సాయంత్రం ఆకులపై నీరు చల్లడం మానుకోండి',
        'పై ఆకులకు, కంకి ఆకుకు మచ్చలు వ్యాపిస్తుంటే స్థానిక వ్యవసాయ అధికారిని సంప్రదించండి',
      ],
      hi: [
        'नमी रोकने वाले घने खरपतवार साफ करें ताकि हवा चलती रहे',
        'शाम के समय ऊपर से सिंचाई न करें',
        'ऊपरी पत्तों की जांच करें और फैलाव बढ़ने पर कृषि अधिकारी से सलाह लें',
      ],
    },
    simpleSafeActions: {
      en: [
        'Clear weeds for better airflow',
        'Do not water leaves in the evening',
        'Check ear leaves and consult an officer',
      ],
      te: [
        'గాలి ఆడేలా కలుపు తీయండి',
        'సాయంత్రం ఆకులపై నీరు వేయకండి',
        'కంకి ఆకులను చూసి అధికారిని అడగండి',
      ],
      hi: [
        'हवा के लिए खरपतवार साफ करें',
        'शाम को पत्तों पर पानी न डालें',
        'भुट्टे के पत्ते जांचें और अधिकारी से पूछें',
      ],
    },
    prevention: {
      en: [
        'Rotate maize away from continuous maize for at least one full season',
        'Bury or remove infected crop residue cleanly after harvest',
        'Select locally tested tolerant maize hybrids',
      ],
      te: [
        'కనీసం ఒక సీజన్ పాటు మొక్కజొన్న బదులు ఇతర పంటలతో మార్పిడి చేయండి',
        'కోత తర్వాత రోగం ఉన్న మొక్కజొన్న అవశేషాలను లోతుగా దున్ని లేదా తీసివేయండి',
        'తెగులు తట్టుకునే స్థానిక మొక్కజొన్న హైబ్రిడ్ రకాలను నాటండి',
      ],
      hi: [
        'कम से कम एक मौसम के लिए मक्का के स्थान पर दूसरी फसल से फसल चक्र करें',
        'कटाई के बाद संक्रमित अवशेष मिट्टी में दबाएं या खेत से साफ करें',
        'रोग-सहनशील स्थानीय मक्का किस्में चुनें',
      ],
    },
    simplePrevention: {
      en: [
        'Do not grow maize back-to-back in the same plot',
        'Clear or plow under old stalks',
        'Choose tolerant maize hybrids',
      ],
      te: [
        'ఒకే పొలంలో వరుసగా మొక్కజొన్న వేయకండి',
        'పాత కర్రలను శుభ్రం చేయండి',
        'తెగులు తట్టుకునే హైబ్రిడ్ రకాలు వేయండి',
      ],
      hi: [
        'एक ही खेत में लगातार मक्का न उगाएं',
        'पुराने डंठल हटाएं या मिट्टी में मिलाएं',
        'सहनशील मक्का किस्में चुनें',
      ],
    },
    whenToSeekHelp: {
      en: 'Seek local agriculture advice if rectangular gray spots reach the ear leaf before grain filling completes.',
      te: 'గింజ కట్టడం పూర్తికాక ముందే కంకి ఆకు వరకు బూడిద మచ్చలు వ్యాపిస్తే వ్యవసాయ అధికారి సలహా తీసుకోండి.',
      hi: 'दाने भरने से पहले यदि आयताकार स्लेटी धब्बे भुट्टे वाले पत्ते तक पहुंच जाएं, तो कृषि अधिकारी से सलाह लें।',
    },
    simpleWhenToSeekHelp: {
      en: 'Contact an expert if spots reach the ear leaf during grain fill.',
      te: 'గింజ కట్టే సమయంలో కంకి ఆకుకు మచ్చలు వస్తే నిపుణులను కలవండి.',
      hi: 'दाना भरते समय भुट्टे वाले पत्ते पर धब्बे आएं तो विशेषज्ञ से मिलें।',
    },
  },
];

export const DISEASE_GUIDE_MAP: Record<string, DiseaseGuide> = Object.fromEntries(
  DISEASE_GUIDES.map((guide) => [`${guide.crop}:${guide.id}`, guide])
);

const DISEASE_GUIDE_BY_ID: Record<string, DiseaseGuide> = Object.fromEntries(
  DISEASE_GUIDES.map((guide) => [guide.id, guide])
);

export function getDiseaseDisplayName(
  disease: SupportedDisease,
  lang: Language,
  crop?: CropType
): string {
  if (disease === 'Unable to assess reliably') {
    if (lang === 'te') return 'ఖచ్చితంగా అంచనా వేయలేకపోయాము';
    if (lang === 'hi') return 'विश्वसनीय आकलन संभव नहीं';
    return 'Unable to assess reliably';
  }
  const byCrop = crop ? DISEASE_GUIDE_MAP[`${crop}:${disease}`] : undefined;
  const found = byCrop ?? DISEASE_GUIDE_BY_ID[disease];
  return found ? found.name[lang] : disease;
}

export const SEASONAL_CHECKLIST: SeasonalChecklistItem[] = [
  // Tomato
  {
    id: 'tomato-1',
    crop: 'Tomato',
    label: {
      en: 'Inspect lower tomato leaves weekly for circular spots or yellowing',
      te: 'టమాటా కింది ఆకులపై వలయాల మచ్చలు లేదా పసుపు రంగు కోసం వారానికోసారి పరిశీలించండి',
      hi: 'टमाटर के निचले पत्तों पर गोल धब्बों या पीलेपन की साप्ताहिक जांच करें',
    },
  },
  {
    id: 'tomato-2',
    crop: 'Tomato',
    label: {
      en: 'Water near plant roots in the morning and use clean dry mulch to stop soil splash',
      te: 'ఉదయం వేళ మొక్క మొదట్లో నీరు పెట్టి, మట్టి తుంపర్లు ఆగడానికి ఎండు మల్చింగ్ వేయండి',
      hi: 'सुबह जड़ों के पास सिंचाई करें और मिट्टी के छींटे रोकने के लिए सूखी मल्च बिछाएं',
    },
  },
  // Chili
  {
    id: 'chili-1',
    crop: 'Chili',
    label: {
      en: 'Check undersides of young chili leaves for curling or tiny sap-sucking pests',
      te: 'లేత మిరప ఆకుల అడుగున ముడత లేదా చిన్న పురుగులు ఉన్నాయో చూడండి',
      hi: 'मिर्च के नए पत्तों के नीचे मुड़ने या छोटे कीटों के लक्षण जांचें',
    },
  },
  {
    id: 'chili-2',
    crop: 'Chili',
    label: {
      en: 'Clear host weeds along field bunds and remove damaged chili pods promptly',
      te: 'గట్లపై కలుపు మొక్కలను తీసివేసి, మచ్చలు ఉన్న మిరప కాయలను వెంటనే వేరు చేయండి',
      hi: 'मेड़ों से खरपतवार हटाएं और खराब धब्बेदार मिर्च के फलों को तुरंत अलग करें',
    },
  },
  // Potato
  {
    id: 'potato-1',
    crop: 'Potato',
    label: {
      en: 'Check potato ridges after rain or fog for dark water-soaked patches or aphids',
      te: 'వర్షం లేదా పొగమంచు తర్వాత బంగాళదుంప ఆకులపై నల్ల తడి మచ్చలు లేదా పేనుబంక చూడండి',
      hi: 'बारिश या कोहरे के बाद आलू के पत्तों पर गहरे गीले धब्बे या माहू कीट जांचें',
    },
  },
  {
    id: 'potato-2',
    crop: 'Potato',
    label: {
      en: 'Hill soil evenly over ridges and use only certified disease-free seed tubers',
      te: 'దుంపలకు మట్టి బాగా ఎగదోసి, సర్టిఫైడ్ ఆరోగ్యకరమైన విత్తన దుంపలను మాత్రమే నాటండి',
      hi: 'मेड़ों पर अच्छी तरह मिट्टी चढ़ाएं और केवल प्रमाणित स्वस्थ बीज आलू बोएं',
    },
  },
  // Rice
  {
    id: 'rice-1',
    crop: 'Rice',
    label: {
      en: 'Avoid excess urea top-dressing if diamond blast spots or wavy leaf blight edges appear',
      te: 'వరి ఆకులపై అగ్గి లేదా ఎండు చారలు కనిపిస్తే అధిక యూరియా వేయడం వెంటనే ఆపండి',
      hi: 'धान में झोंका या पर्ण झुलसा दिखने पर अतिरिक्त यूरिया डालना तुरंत रोकें',
    },
  },
  {
    id: 'rice-2',
    crop: 'Rice',
    label: {
      en: 'Keep paddy bunds weed-free and prevent drainage water flowing from diseased plots',
      te: 'వరి గట్లపై కలుపు తీసి, రోగం ఉన్న మడి నీరు పక్క మడిలోకి వెళ్ళకుండా ఆపండి',
      hi: 'धान की मेड़ें साफ रखें और संक्रमित खेत का पानी दूसरे खेत में न जाने दें',
    },
  },
  // Cotton
  {
    id: 'cotton-1',
    crop: 'Cotton',
    label: {
      en: 'Watch cotton leaf undersides for whiteflies and thickened curling veins',
      te: 'పత్తి ఆకుల అడుగున తెల్లదోమ ఉనికిని మరియు మందపాటి ముడత ఈనెలను గమనించండి',
      hi: 'कपास के पत्तों के नीचे सफेद मक्खी और मोटी मुड़ती नसों की जांच करें',
    },
  },
  {
    id: 'cotton-2',
    crop: 'Cotton',
    label: {
      en: 'Keep rows weed-free for airflow and clear leftover cotton stalks after harvest',
      te: 'గాలి ఆడేలా వరుసలలో కలుపు తీసి, కోత తర్వాత పాత పత్తి కట్టెలను తొలగించండి',
      hi: 'हवा के लिए कतारों से घास हटाएं और कटाई के बाद पुराने डंठल साफ करें',
    },
  },
  // Maize
  {
    id: 'maize-1',
    crop: 'Maize',
    label: {
      en: 'Inspect lower and ear-level maize leaves for cigar-shaped or rectangular gray spots',
      te: 'మొక్కజొన్న కింది మరియు కంకి ఆకులపై పొడవాటి లేదా చతురస్రాకార మచ్చలను పరిశీలించండి',
      hi: 'मक्का के निचले और भुट्टे वाले पत्तों पर सिगार जैसे या चौकोर स्लेटी धब्बे जांचें',
    },
  },
  {
    id: 'maize-2',
    crop: 'Maize',
    label: {
      en: 'Rotate maize with pulses or oilseeds and clear old maize stalks after harvest',
      te: 'పప్పు లేదా నూనెగింజలతో పంట మార్పిడి చేసి కోత తర్వాత పాత కర్రలను శుభ్రం చేయండి',
      hi: 'दाल या तिलहन से फसल चक्र करें और कटाई के बाद पुराने डंठल खेत से हटाएं',
    },
  },
];
