import { Language } from '../types/agritech';

export const LANGUAGE_OPTIONS: { code: Language; nativeLabel: string; englishLabel: string }[] = [
  { code: 'en', nativeLabel: 'English', englishLabel: 'English' },
  { code: 'te', nativeLabel: 'తెలుగు', englishLabel: 'Telugu' },
  { code: 'hi', nativeLabel: 'हिन्दी', englishLabel: 'Hindi' },
];

export interface TranslationBundle {
  brandName: string;
  tagline: string;
  nav: {
    overview: string;
    scan: string;
    history: string;
    insights: string;
    knowledge: string;
    settings: string;
  };
  common: {
    tomato: string;
    chili: string;
    potato: string;
    rice: string;
    cotton: string;
    maize: string;
    allCrops: string;
    low: string;
    medium: string;
    high: string;
    save: string;
    saved: string;
    cancel: string;
    delete: string;
    confirmDelete: string;
    edit: string;
    close: string;
    retry: string;
    basedOnSavedScans: string;
    demoData: string;
    includesDemoData: string;
    disclaimer: string;
    confidence: string;
    severity: string;
    crop: string;
    date: string;
    notes: string;
    farmerProfile: string;
    language: string;
    scanLeafCta: string;
    loadDemoData: string;
  };
  overview: {
    welcomePrefix: string;
    editName: string;
    namePlaceholder: string;
    subtitle: string;
    healthOverviewTitle: string;
    totalScans: string;
    lowRiskScans: string;
    attentionNeeded: string;
    mostCommonIssue: string;
    recentScansTitle: string;
    viewAllHistory: string;
    actionCentreTitle: string;
    actionCentreSubtitle: string;
    feedbackCardTitle: string;
    feedbackCardSubtitle: string;
    noFeedbackYet: string;
    emptyTitle: string;
    emptyBody: string;
    noIssueYet: string;
    openResult: string;
    highRiskAlertTitle: string;
    highRiskAlertBody: string;
    mediumRiskTitle: string;
    mediumRiskBody: string;
    routineMonitoringTitle: string;
    routineMonitoringBody: string;
    checkKnowledgeTitle: string;
    checkKnowledgeBody: string;
  };
  scan: {
    title: string;
    subtitle: string;
    steps: [string, string, string, string, string];
    step1Title: string;
    step1LimitNote: string;
    supportedConditionsCount: string;
    selectCropAction: string;
    selectedLabel: string;
    autoDetectLabel: string;
    autoDetectBetaBadge: string;
    autoDetectDesc: string;
    detectCropButton: string;
    detectingCropStatus: string;
    suggestedCropLabel: string;
    confirmCropPrompt: string;
    autoDetectNote: string;
    confirmCropButton: string;
    chooseDifferentCrop: string;
    autoDetectUnsupported: string;
    autoDetectError: string;
    otherCropTitle: string;
    otherCropDesc: string;
    unsupportedNotice: string;
    supportedCropsListLabel: string;
    browseKnowledgeHub: string;
    requestCropTitle: string;
    requestCropNameLabel: string;
    requestCropNamePlaceholder: string;
    requestCropRegionLabel: string;
    requestCropRegionPlaceholder: string;
    requestCropSubmit: string;
    requestCropSaved: string;
    requestCropRequired: string;
    step2Title: string;
    dropzoneTitle: string;
    dropzoneHint: string;
    chooseFile: string;
    takePhoto: string;
    replaceImage: string;
    removeImage: string;
    invalidFileType: string;
    fileTooLarge: string;
    step3Title: string;
    qualityAssistantTitle: string;
    qualityChecking: string;
    qualityRatings: { Good: string; Fair: string; Poor: string };
    qualityReasons: { good: string; fair: string; poor: string };
    poorQualityWarning: string;
    goodExampleLabel: string;
    goodExampleDesc: string;
    badExampleLabel: string;
    badExampleDesc: string;
    leafAgeLabel: string;
    leafAges: { young: string; mature: string; unknown: string };
    symptomLabel: string;
    symptoms: {
      spots: string;
      curling: string;
      yellowing: string;
      white_powder: string;
      unknown: string;
    };
    notesLabel: string;
    notesPlaceholder: string;
    analyzeButton: string;
    analyzingStep1: string;
    analyzingStep2: string;
    analysisErrorTitle: string;
  };
  result: {
    heading: string;
    inconclusiveTitle: string;
    inconclusiveBadge: string;
    inconclusiveGuidance1: string;
    inconclusiveGuidance2: string;
    inconclusiveMismatchNote: string;
    cropMismatchTitle: string;
    cropMismatchBody: string;
    cropMismatchSuggestedPrefix: string;
    selectCorrectCrop: string;
    tryAnotherPhoto: string;
    photoQuality: string;
    symptomsObserved: string;
    likelyCause: string;
    immediateActions: string;
    preventionSteps: string;
    expertHelpAdvice: string;
    saveScan: string;
    savedInHistory: string;
    scanAnother: string;
    viewHistory: string;
    downloadImage: string;
    printReport: string;
    noActiveResultTitle: string;
    noActiveResultBody: string;
    riskLabelSuffix: string;
    translatingGuidance: string;
    translationUnavailableTitle: string;
    translationUnavailableBody: string;
    feedbackQuestion: string;
    feedbackOptions: {
      helpful: string;
      unsure: string;
      needs_correction: string;
    };
    feedbackSavedNote: string;
  };
  history: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    emptyTitle: string;
    emptyBody: string;
    noMatchesTitle: string;
    noMatchesBody: string;
    clearFilters: string;
    deleteConfirmTitle: string;
    deleteConfirmBody: string;
    openDetails: string;
  };
  insights: {
    title: string;
    subtitle: string;
    insufficientTitle: string;
    insufficientBody: string;
    weeklyTrendTitle: string;
    diseaseDistTitle: string;
    cropSplitTitle: string;
    riskBreakdownTitle: string;
    mostCommonTitle: string;
    scansUnit: string;
    checklistTitle: string;
    checklistSubtitle: string;
  };
  knowledge: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    farmerFriendlyToggle: string;
    farmerFriendlyDesc: string;
    commonSymptoms: string;
    likelyCause: string;
    safeNextActions: string;
    prevention: string;
    whenToSeekHelp: string;
    noResults: string;
  };
  settings: {
    title: string;
    subtitle: string;
    profileSection: string;
    farmerNameLabel: string;
    regionLabel: string;
    regionPlaceholder: string;
    languageSection: string;
    languageHelp: string;
    privacySection: string;
    privacyNote: string;
    safetyNote: string;
    localDataSection: string;
    localDataDesc: string;
    resetButton: string;
    resetConfirmTitle: string;
    resetConfirmBody: string;
    resetConfirmAction: string;
    savedToast: string;
    resetToast: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationBundle> = {
  en: {
    brandName: 'Arogya Care Pro',
    tagline: 'Crop health guidance, in every farmer’s language.',
    nav: {
      overview: 'Overview',
      scan: 'Scan Crop',
      history: 'Scan History',
      insights: 'Crop Insights',
      knowledge: 'Knowledge Hub',
      settings: 'Settings',
    },
    common: {
      tomato: 'Tomato',
      chili: 'Chili',
      potato: 'Potato',
      rice: 'Rice',
      cotton: 'Cotton',
      maize: 'Maize',
      allCrops: 'All crops',
      low: 'Low',
      medium: 'Medium',
      high: 'High',
      save: 'Save',
      saved: 'Saved',
      cancel: 'Cancel',
      delete: 'Delete',
      confirmDelete: 'Confirm delete',
      edit: 'Edit',
      close: 'Close',
      retry: 'Try again',
      basedOnSavedScans: 'Based on saved scans',
      demoData: 'Demo data',
      includesDemoData: 'Includes demo data',
      disclaimer: 'This screening is informational. Verify serious crop issues with a qualified agriculture expert.',
      confidence: 'Confidence',
      severity: 'Risk severity',
      crop: 'Crop',
      date: 'Date',
      notes: 'Notes',
      farmerProfile: 'Farmer profile',
      language: 'Language',
      scanLeafCta: 'Scan a crop leaf',
      loadDemoData: 'Load sample scans (Demo data)',
    },
    overview: {
      welcomePrefix: 'Namaste,',
      editName: 'Edit name',
      namePlaceholder: 'Enter farmer name',
      subtitle: 'Crop health guidance, in every farmer’s language.',
      healthOverviewTitle: 'Crop Health Overview',
      totalScans: 'Total scans',
      lowRiskScans: 'Low-risk scans',
      attentionNeeded: 'Attention-needed scans',
      mostCommonIssue: 'Most common possible issue',
      recentScansTitle: 'Recent Scans',
      viewAllHistory: 'View history',
      actionCentreTitle: 'Action Centre',
      actionCentreSubtitle: 'Next steps generated strictly from your saved leaf scans',
      feedbackCardTitle: 'Guidance feedback',
      feedbackCardSubtitle: 'Farmer ratings on saved screening results',
      noFeedbackYet: 'Rate a screening result to track guidance helpfulness.',
      emptyTitle: 'No leaf scans saved yet',
      emptyBody: 'Upload a clear leaf photo for Tomato, Chili, Potato, Rice, Cotton, or Maize to receive an informational screening and safe field care guidance.',
      noIssueYet: 'No scans yet',
      openResult: 'View result',
      highRiskAlertTitle: 'Priority field check recommended',
      highRiskAlertBody: 'You have high-risk screening results in your history. Inspect neighboring plants today, avoid overhead watering, and verify with a local agriculture officer.',
      mediumRiskTitle: 'Remove heavily affected foliage safely',
      mediumRiskBody: 'For medium-risk scans, gently prune badly spotted lower leaves, improve airflow between rows, and monitor new shoots.',
      routineMonitoringTitle: 'Keep up weekly leaf checks',
      routineMonitoringBody: 'Your saved scans currently show low risk. Continue morning root-level watering and weekly underside leaf inspection.',
      checkKnowledgeTitle: 'Review crop care guides',
      checkKnowledgeBody: 'Browse plain-language symptom guides and prevention checklists for our 6 supported crops anytime in the Knowledge Hub.',
    },
    scan: {
      title: 'Scan a Crop Leaf',
      subtitle: 'Follow the guided steps below for a clearer screening result.',
      steps: ['Choose crop', 'Upload leaf photo', 'Review photo quality', 'Analyze', 'View result'],
      step1Title: '1. Choose crop',
      step1LimitNote: 'Arogya Care Pro currently supports 6 crops (18 conditions). It cannot diagnose every plant or disease.',
      supportedConditionsCount: '3 supported conditions',
      selectCropAction: 'Select crop',
      selectedLabel: 'Selected',
      autoDetectLabel: 'Auto-detect crop (Beta)',
      autoDetectBetaBadge: 'Beta',
      autoDetectDesc: 'Unsure which of our 6 supported crops the leaf belongs to? Upload a photo to suggest a crop, then confirm before screening.',
      detectCropButton: 'Detect crop (Beta)',
      detectingCropStatus: 'Checking which of the 6 supported crops best matches your leaf photo…',
      suggestedCropLabel: 'Suggested crop',
      confirmCropPrompt: 'Please confirm before disease analysis.',
      autoDetectNote: 'Auto-detect is a convenience feature, not a diagnosis.',
      confirmCropButton: 'Confirm crop & continue',
      chooseDifferentCrop: 'Or select a different crop from the grid above.',
      autoDetectUnsupported: 'This photo does not clearly match our 6 supported crops (Tomato, Chili, Potato, Rice, Cotton, Maize). Select a supported crop manually or choose “Other / unsupported crop”.',
      autoDetectError: 'Could not detect crop from the image right now. Please select a crop manually.',
      otherCropTitle: 'Other / unsupported crop',
      otherCropDesc: 'My crop is not Tomato, Chili, Potato, Rice, Cotton, or Maize',
      unsupportedNotice: 'This crop is not currently in Arogya Care’s supported disease library.',
      supportedCropsListLabel: 'Currently supported crops (click any to switch):',
      browseKnowledgeHub: 'Browse Knowledge Hub',
      requestCropTitle: 'Request crop support',
      requestCropNameLabel: 'Crop name',
      requestCropNamePlaceholder: 'Example: Brinjal, Groundnut, Okra, Soybean…',
      requestCropRegionLabel: 'Village / district note (optional)',
      requestCropRegionPlaceholder: 'Example: Guntur, Kharif season',
      requestCropSubmit: 'Submit crop request',
      requestCropSaved: 'Thank you. Your crop request has been recorded on this device.',
      requestCropRequired: 'Please enter the crop name you would like supported.',
      step2Title: '2. Upload leaf photo',
      dropzoneTitle: 'Drop a leaf photo here, or choose from device',
      dropzoneHint: 'Supports JPG, JPEG, PNG up to 10 MB',
      chooseFile: 'Choose photo',
      takePhoto: 'Use camera',
      replaceImage: 'Replace photo',
      removeImage: 'Remove',
      invalidFileType: 'Please upload a JPG, JPEG, or PNG image file only.',
      fileTooLarge: 'This image exceeds 10 MB. Please choose a smaller photo under 10 MB.',
      step3Title: '3. Review photo quality & leaf details',
      qualityAssistantTitle: 'Photo quality assistant',
      qualityChecking: 'Checking photo clarity and lighting…',
      qualityRatings: { Good: 'Good', Fair: 'Fair', Poor: 'Poor' },
      qualityReasons: {
        good: 'Leaf is sharp and well lit.',
        fair: 'Moderate focus or uneven lighting detected. A brighter daylight photo may improve clarity.',
        poor: 'Image is blurry or too dark.',
      },
      poorQualityWarning: 'Photo quality is rated Poor. You can still continue, or replace it with one sharp photo taken in daylight.',
      goodExampleLabel: 'Good example: one leaf, daylight, sharp focus',
      goodExampleDesc: 'Hold one leaf steady in clear outdoor light so spots or veins are crisp.',
      badExampleLabel: 'Bad example: blurry image, multiple leaves, dark lighting',
      badExampleDesc: 'Avoid motion blur, heavy shadows, or tangled overlapping leaves.',
      leafAgeLabel: 'Leaf age',
      leafAges: { young: 'Young leaf', mature: 'Mature leaf', unknown: 'Not sure' },
      symptomLabel: 'Visible symptom',
      symptoms: {
        spots: 'Spots or patches',
        curling: 'Curling or puckering',
        yellowing: 'Yellowing',
        white_powder: 'White powder',
        unknown: 'Not sure',
      },
      notesLabel: 'Farmer notes (optional)',
      notesPlaceholder: 'Example: Lower leaves turning brown after two days of rain...',
      analyzeButton: 'Analyze leaf photo',
      analyzingStep1: 'Reviewing visible leaf patterns…',
      analyzingStep2: 'Preparing a possible-disease result…',
      analysisErrorTitle: 'Could not complete screening',
    },
    result: {
      heading: 'Possible disease prediction',
      inconclusiveTitle: 'Unable to assess reliably',
      inconclusiveBadge: 'Low-quality / inconclusive scan',
      inconclusiveGuidance1: 'Take one sharp photo of a single leaf in daylight.',
      inconclusiveGuidance2: 'Avoid shadows, blur, soil-covered leaves, and multiple leaves.',
      inconclusiveMismatchNote: 'The screening output could not be verified consistently for this crop.',
      cropMismatchTitle: 'This image may not match the selected crop.',
      cropMismatchBody: 'To avoid a wrong prediction, no disease diagnosis was generated. Please select the correct crop or upload another leaf photo.',
      cropMismatchSuggestedPrefix: 'Closest visible match from supported crops:',
      selectCorrectCrop: 'Select correct crop',
      tryAnotherPhoto: 'Try another photo',
      photoQuality: 'Photo quality observation',
      symptomsObserved: 'Symptoms observed',
      likelyCause: 'Likely cause',
      immediateActions: 'Immediate low-risk actions',
      preventionSteps: 'Prevention for future crops',
      expertHelpAdvice: 'When to seek expert help',
      saveScan: 'Save scan',
      savedInHistory: 'Saved in history',
      scanAnother: 'Scan another leaf',
      viewHistory: 'View scan history',
      downloadImage: 'Download summary image',
      printReport: 'Print report',
      noActiveResultTitle: 'No scan selected',
      noActiveResultBody: 'Upload a leaf photo or choose a saved scan from history to review the full screening guidance.',
      riskLabelSuffix: 'risk',
      translatingGuidance: 'Translating saved guidance…',
      translationUnavailableTitle: 'Translation unavailable',
      translationUnavailableBody: 'Could not translate this saved guidance right now. Please try again.',
      feedbackQuestion: 'Was this guidance useful?',
      feedbackOptions: {
        helpful: 'Yes, helpful',
        unsure: 'Not sure',
        needs_correction: 'Needs correction',
      },
      feedbackSavedNote: 'Feedback saved on this device.',
    },
    history: {
      title: 'Scan History',
      subtitle: 'Your saved crop leaf screenings stored on this device.',
      searchPlaceholder: 'Search by disease, crop, or notes…',
      emptyTitle: 'No saved scans yet',
      emptyBody: 'Once you analyze and save a crop leaf scan, it will appear here for future tracking.',
      noMatchesTitle: 'No matching scans',
      noMatchesBody: 'Try clearing your search text or switching the crop filter.',
      clearFilters: 'Clear filters',
      deleteConfirmTitle: 'Delete this scan?',
      deleteConfirmBody: 'This removes the selected screening record from this device.',
      openDetails: 'Open result',
    },
    insights: {
      title: 'Crop Insights',
      subtitle: 'Honest patterns calculated strictly from your saved scan history.',
      insufficientTitle: 'Need at least 2 saved scans for insights',
      insufficientBody: 'Save at least two leaf scans to unlock weekly scan trends, crop comparisons, and disease distribution charts. We never show fabricated chart numbers.',
      weeklyTrendTitle: 'Scan trend by week',
      diseaseDistTitle: 'Possible-disease distribution',
      cropSplitTitle: 'Scans by supported crop',
      riskBreakdownTitle: 'Risk-level breakdown',
      mostCommonTitle: 'Most common observation',
      scansUnit: 'scans',
      checklistTitle: 'Seasonal Crop Care Checklist',
      checklistSubtitle: 'Practical weekly habits across our 6 supported crops. Progress saves on your device.',
    },
    knowledge: {
      title: 'Knowledge Hub',
      subtitle: 'Safe, reliable reference guidance across our 6 supported crops (18 conditions).',
      searchPlaceholder: 'Search condition, crop, or symptom…',
      farmerFriendlyToggle: 'Farmer-friendly language',
      farmerFriendlyDesc: 'Switch to shorter, simpler explanations',
      commonSymptoms: 'Common symptoms',
      likelyCause: 'Likely cause',
      safeNextActions: 'Safe next actions',
      prevention: 'Prevention',
      whenToSeekHelp: 'When to seek expert help',
      noResults: 'No matching conditions found.',
    },
    settings: {
      title: 'Settings',
      subtitle: 'Manage your farmer profile, preferred language, and local device storage.',
      profileSection: 'Farmer Profile',
      farmerNameLabel: 'Farmer name',
      regionLabel: 'Village / Field note (optional)',
      regionPlaceholder: 'Example: Plot 2, Red Soil Block',
      languageSection: 'Preferred Language',
      languageHelp: 'Updates navigation, scan steps, disease guidance, and AI screening output.',
      privacySection: 'Privacy & Safety',
      privacyNote: 'Images are processed only for disease screening. Scan history is stored on this device unless cloud sync is enabled.',
      safetyNote: 'Arogya Care Pro provides informational screening for 6 supported crops only and does not replace qualified agriculture advice. It never recommends pesticide brand names or chemical dosages.',
      localDataSection: 'Local Device Data',
      localDataDesc: 'Clear all saved scan history, checklist progress, and profile settings stored in this browser.',
      resetButton: 'Reset all local data',
      resetConfirmTitle: 'Clear all local data?',
      resetConfirmBody: 'This will permanently remove all saved scans, seasonal checklist ticks, and custom profile info from this browser.',
      resetConfirmAction: 'Yes, clear all data',
      savedToast: 'Profile settings saved',
      resetToast: 'All local data cleared',
    },
  },
  te: {
    brandName: 'ఆరోగ్య కేర్ ప్రో',
    tagline: 'ప్రతి రైతు భాషలో పంట ఆరోగ్య మార్గదర్శనం.',
    nav: {
      overview: 'అవలోకనం',
      scan: 'ఆకు స్కాన్',
      history: 'స్కాన్ చరిత్ర',
      insights: 'పంట విశ్లేషణ',
      knowledge: 'సమాచార కేంద్రం',
      settings: 'సెట్టింగ్స్',
    },
    common: {
      tomato: 'టమాటా',
      chili: 'మిరప',
      potato: 'బంగాళదుంప',
      rice: 'వరి',
      cotton: 'పత్తి',
      maize: 'మొక్కజొన్న',
      allCrops: 'అన్ని పంటలు',
      low: 'తక్కువ',
      medium: 'మధ్యస్థం',
      high: 'అధికం',
      save: 'సేవ్ చేయండి',
      saved: 'సేవ్ అయింది',
      cancel: 'రద్దు చేయండి',
      delete: 'తొలగించండి',
      confirmDelete: 'తొలగింపు నిర్ధారించండి',
      edit: 'మార్చండి',
      close: 'మూసివేయండి',
      retry: 'మళ్ళీ ప్రయత్నించండి',
      basedOnSavedScans: 'సేవ్ చేసిన స్కాన్‌ల ఆధారంగా',
      demoData: 'డెమో డేటా',
      includesDemoData: 'డెమో డేటాతో కలిపి',
      disclaimer: 'ఈ స్క్రీనింగ్ సమాచారం కోసం మాత్రమే. తీవ్రమైన పంట సమస్యలను అర్హత కలిగిన వ్యవసాయ నిపుణులతో నిర్ధారించుకోండి.',
      confidence: 'నమ్మకం స్థాయి',
      severity: 'ప్రమాద స్థాయి',
      crop: 'పంట',
      date: 'తేదీ',
      notes: 'గమనికలు',
      farmerProfile: 'రైతు ప్రొఫైల్',
      language: 'భాష',
      scanLeafCta: 'పంట ఆకును స్కాన్ చేయండి',
      loadDemoData: 'నమూనా స్కాన్‌లు లోడ్ చేయండి (డెమో డేటా)',
    },
    overview: {
      welcomePrefix: 'నమస్కారం,',
      editName: 'పేరు మార్చండి',
      namePlaceholder: 'రైతు పేరు నమోదు చేయండి',
      subtitle: 'ప్రతి రైతు భాషలో పంట ఆరోగ్య మార్గదర్శనం.',
      healthOverviewTitle: 'పంట ఆరోగ్య అవలోకనం',
      totalScans: 'మొత్తం స్కాన్‌లు',
      lowRiskScans: 'తక్కువ ప్రమాద స్కాన్‌లు',
      attentionNeeded: 'జాగ్రత్త అవసరమైన స్కాన్‌లు',
      mostCommonIssue: 'ఎక్కువగా కనిపించిన సమస్య',
      recentScansTitle: 'ఇటీవలి స్కాన్‌లు',
      viewAllHistory: 'చరిత్ర చూడండి',
      actionCentreTitle: 'చర్యల కేంద్రం',
      actionCentreSubtitle: 'మీరు సేవ్ చేసిన ఆకు స్కాన్‌ల ఆధారంగా సూచనలు',
      feedbackCardTitle: 'మార్గదర్శన అభిప్రాయం',
      feedbackCardSubtitle: 'సేవ్ చేసిన ఫలితాలపై రైతుల అభిప్రాయాలు',
      noFeedbackYet: 'అభిప్రాయాలను చూడటానికి ఒక ఫలితానికి రేటింగ్ ఇవ్వండి.',
      emptyTitle: 'ఇంకా ఆకు స్కాన్‌లు సేవ్ కాలేదు',
      emptyBody: 'సమాచార ఆధారిత తెగులు అంచనా మరియు సురక్షిత జాగ్రత్తల కోసం టమాటా, మిరప, బంగాళదుంప, వరి, పత్తి లేదా మొక్కజొన్న ఆకు ఫోటోను అప్‌లోడ్ చేయండి.',
      noIssueYet: 'ఇంకా స్కాన్‌లు లేవు',
      openResult: 'ఫలితం చూడండి',
      highRiskAlertTitle: 'తక్షణ పొలం పరిశీలన అవసరం',
      highRiskAlertBody: 'మీ చరిత్రలో అధిక ప్రమాద అంచనాలు ఉన్నాయి. పక్క మొక్కలను ఈరోజే పరిశీలించి, పైనుండి నీరు పోయడం ఆపి, స్థానిక వ్యవసాయ అధికారిని సంప్రదించండి.',
      mediumRiskTitle: 'దెబ్బతిన్న ఆకులను సురక్షితంగా తొలగించండి',
      mediumRiskBody: 'మధ్యస్థ ప్రమాద స్కాన్‌ల కోసం, మచ్చలు ఎక్కువగా ఉన్న కింది ఆకులను తీసివేసి మొక్కల మధ్య గాలి ఆడేలా చూడండి.',
      routineMonitoringTitle: 'వారానికోసారి ఆకుల పరిశీలన కొనసాగించండి',
      routineMonitoringBody: 'ప్రస్తుతం సేవ్ చేసిన స్కాన్‌లు తక్కువ ప్రమాదాన్ని చూపుతున్నాయి. ఉదయం మొదట్లో నీరు పెట్టడం కొనసాగించండి.',
      checkKnowledgeTitle: 'పంట సంరక్షణ గైడ్లు చూడండి',
      checkKnowledgeBody: 'సహాయం అందించే 6 పంటల కోసం సులభమైన భాషలో లక్షణాలు మరియు నివారణ పద్ధతులను సమాచార కేంద్రంలో చూడండి.',
    },
    scan: {
      title: 'పంట ఆకును స్కాన్ చేయండి',
      subtitle: 'మంచి ఫలితం కోసం కింది దశలను అనుసరించండి.',
      steps: ['పంట ఎంచుకోండి', 'ఆకు ఫోటో అప్‌లోడ్', 'ఫోటో నాణ్యత', 'విశ్లేషణ', 'ఫలితం చూడండి'],
      step1Title: '1. పంటను ఎంచుకోండి',
      step1LimitNote: 'ఆరోగ్య కేర్ ప్రో ప్రస్తుతం 6 పంటలకు (18 తెగుళ్ళు) మాత్రమే మార్గదర్శనం ఇస్తుంది. అన్ని రకాల మొక్కలను నిర్ధారించదు.',
      supportedConditionsCount: '3 తెగుళ్ళు అందుబాటులో ఉన్నాయి',
      selectCropAction: 'పంట ఎంచుకోండి',
      selectedLabel: 'ఎంచుకోబడింది',
      autoDetectLabel: 'ఆటో-డిటెక్ట్ పంట (బీటా)',
      autoDetectBetaBadge: 'బీటా',
      autoDetectDesc: 'ఈ ఆకు మా 6 పంటలలో ఏదో తెలియకపోతే, ఫోటో అప్‌లోడ్ చేసి పంట సూచన పొంది నిర్ధారించండి.',
      detectCropButton: 'పంటను గుర్తించండి (బీటా)',
      detectingCropStatus: 'మీ ఆకు ఫోటో మా 6 పంటలలో ఏ పంటకు సరిపోతుందో చూస్తున్నాము…',
      suggestedCropLabel: 'సూచించిన పంట',
      confirmCropPrompt: 'తెగులు విశ్లేషణకు ముందు దయచేసి నిర్ధారించండి.',
      autoDetectNote: 'ఆటో-డిటెక్ట్ కేవలం సౌకర్యం కోసం మాత్రమే, ఇది తెగులు నిర్ధారణ కాదు.',
      confirmCropButton: 'పంటను నిర్ధారించి కొనసాగండి',
      chooseDifferentCrop: 'లేదా పై పట్టిక నుండి మరో పంటను ఎంచుకోండి.',
      autoDetectUnsupported: 'ఈ ఫోటో మా 6 పంటలకు (టమాటా, మిరప, బంగాళదుంప, వరి, పత్తి, మొక్కజొన్న) స్పష్టంగా సరిపోలడం లేదు. దయచేసి పంటను ఎంచుకోండి లేదా “ఇతర / మద్దతు లేని పంట” ఎంచుకోండి.',
      autoDetectError: 'ఫోటో నుండి పంటను గుర్తించలేకపోయాము. దయచేసి పంటను మీరే ఎంచుకోండి.',
      otherCropTitle: 'ఇతర / మద్దతు లేని పంట',
      otherCropDesc: 'నా పంట టమాటా, మిరప, బంగాళదుంప, వరి, పత్తి లేదా మొక్కజొన్న కాదు',
      unsupportedNotice: 'ఈ పంట ప్రస్తుతం ఆరోగ్య కేర్ మద్దతు ఉన్న తెగులు లైబ్రరీలో లేదు.',
      supportedCropsListLabel: 'ప్రస్తుతం మద్దతు ఉన్న పంటలు (మార్చడానికి క్లిక్ చేయండి):',
      browseKnowledgeHub: 'సమాచార కేంద్రాన్ని చూడండి',
      requestCropTitle: 'కొత్త పంట మద్దతును అభ్యర్థించండి',
      requestCropNameLabel: 'పంట పేరు',
      requestCropNamePlaceholder: 'ఉదాహరణ: వంగ, వేరుశెనగ, బెండ, సోయాబీన్…',
      requestCropRegionLabel: 'గ్రామం / జిల్లా గమనిక (ఐచ్ఛికం)',
      requestCropRegionPlaceholder: 'ఉదాహరణ: గుంటూరు, ఖరీఫ్ సీజన్',
      requestCropSubmit: 'అభ్యర్థన పంపండి',
      requestCropSaved: 'ధన్యవాదాలు. మీ పంట అభ్యర్థన ఈ పరికరంలో నమోదైంది.',
      requestCropRequired: 'దయచేసి మీరు కోరుకునే పంట పేరును నమోదు చేయండి.',
      step2Title: '2. ఆకు ఫోటో అప్‌లోడ్ చేయండి',
      dropzoneTitle: 'ఆకు ఫోటోను ఇక్కడ వదలండి లేదా పరికరం నుండి ఎంచుకోండి',
      dropzoneHint: 'JPG, JPEG, PNG ఫైళ్లు మాత్రమే, గరిష్టంగా 10 MB',
      chooseFile: 'ఫోటో ఎంచుకోండి',
      takePhoto: 'కెమెరా వాడండి',
      replaceImage: 'ఫోటో మార్చండి',
      removeImage: 'తొలగించండి',
      invalidFileType: 'దయచేసి JPG, JPEG లేదా PNG చిత్రాన్ని మాత్రమే అప్‌లోడ్ చేయండి.',
      fileTooLarge: 'ఈ ఫోటో 10 MB కంటే పెద్దదిగా ఉంది. దయచేసి 10 MB లోపు ఉన్న ఫోటోను ఎంచుకోండి.',
      step3Title: '3. ఫోటో నాణ్యత & ఆకు వివరాలు',
      qualityAssistantTitle: 'ఫోటో నాణ్యత సహాయకుడు',
      qualityChecking: 'ఫోటో స్పష్టత మరియు వెలుతురును పరిశీలిస్తున్నాము…',
      qualityRatings: { Good: 'బాగుంది', Fair: 'సరైనది', Poor: 'బలహీనం' },
      qualityReasons: {
        good: 'ఆకు స్పష్టంగా మరియు మంచి వెలుతురులో ఉంది.',
        fair: 'కొంచెం మసకగా లేదా తక్కువ వెలుతురులో ఉంది. పగటి వెలుతురులో తీసిన ఫోటో మరింత స్పష్టంగా ఉంటుంది.',
        poor: 'ఫోటో మసకగా లేదా చాలా చీకటిగా ఉంది.',
      },
      poorQualityWarning: 'ఫోటో నాణ్యత బలహీనంగా ఉంది. మీరు కొనసాగవచ్చు, లేదా పగటి వెలుతురులో స్పష్టమైన ఫోటోను మార్చి చూడవచ్చు.',
      goodExampleLabel: 'మంచి ఉదాహరణ: ఒకే ఆకు, పగటి వెలుతురు, స్పష్టమైన ఫోకస్',
      goodExampleDesc: 'మచ్చలు స్పష్టంగా కనిపించేలా ఒక ఆకును పగటి వెలుతురులో స్థిరంగా పట్టుకోండి.',
      badExampleLabel: 'చెడ్డ ఉదాహరణ: మసక ఫోటో, ఎక్కువ ఆకులు, చీకటి వెలుతురు',
      badExampleDesc: 'కదిలిన మసక ఫోటోలు, చీకటి నీడలు మరియు కలిసిపోయిన ఆకులను నివారించండి.',
      leafAgeLabel: 'ఆకు వయస్సు',
      leafAges: { young: 'లేత ఆకు', mature: 'ముదిరిన ఆకు', unknown: 'తెలియదు' },
      symptomLabel: 'కనిపిస్తున్న లక్షణం',
      symptoms: {
        spots: 'మచ్చలు లేదా పాచెస్',
        curling: 'ఆకులు ముడుచుకోవడం',
        yellowing: 'పసుపు రంగులోకి మారడం',
        white_powder: 'తెల్లని పొడి',
        unknown: 'తెలియదు',
      },
      notesLabel: 'రైతు గమనికలు (ఐచ్ఛికం)',
      notesPlaceholder: 'ఉదాహరణ: రెండు రోజుల వర్షం తర్వాత కింది ఆకులు గోధుమ రంగులోకి మారుతున్నాయి...',
      analyzeButton: 'ఆకు ఫోటోను విశ్లేషించండి',
      analyzingStep1: 'ఆకుపై కనిపిస్తున్న లక్షణాలను పరిశీలిస్తున్నాము…',
      analyzingStep2: 'సంభావ్య తెగులు ఫలితాన్ని సిద్ధం చేస్తున్నాము…',
      analysisErrorTitle: 'స్క్రీనింగ్ పూర్తి చేయలేకపోయాము',
    },
    result: {
      heading: 'సంభావ్య తెగులు అంచనా',
      inconclusiveTitle: 'ఖచ్చితంగా అంచనా వేయలేకపోయాము',
      inconclusiveBadge: 'తక్కువ నాణ్యత / అనిశ్చిత స్కాన్',
      inconclusiveGuidance1: 'పగటి వెలుతురులో ఒకే ఆకు యొక్క స్పష్టమైన ఫోటోను తీయండి.',
      inconclusiveGuidance2: 'నీడలు, మసకబారిన ఫోటోలు, మట్టి అంటిన ఆకులు మరియు ఒకటి కంటే ఎక్కువ ఆకులను నివారించండి.',
      inconclusiveMismatchNote: 'ఈ పంటకు సంబంధించిన వివరాలు సరిపోలనందున ఖచ్చితమైన అంచనా చూపబడలేదు.',
      cropMismatchTitle: 'ఈ చిత్రం ఎంచుకున్న పంటతో సరిపోలకపోవచ్చు.',
      cropMismatchBody: 'తప్పుడు అంచనాను నివారించడానికి తెగులు ఫలితం చూపబడలేదు. దయచేసి సరైన పంటను ఎంచుకోండి లేదా మరో ఆకు ఫోటోను అప్‌లోడ్ చేయండి.',
      cropMismatchSuggestedPrefix: 'మద్దతు ఉన్న పంటలలో దగ్గరి పోలిక:',
      selectCorrectCrop: 'సరైన పంట ఎంచుకోండి',
      tryAnotherPhoto: 'మరో ఫోటో ప్రయత్నించండి',
      photoQuality: 'ఫోటో నాణ్యత పరిశీలన',
      symptomsObserved: 'గమనించిన లక్షణాలు',
      likelyCause: 'సంభావ్య కారణం',
      immediateActions: 'వెంటనే తీసుకోవాల్సిన తక్కువ-ప్రమాద చర్యలు',
      preventionSteps: 'భవిష్యత్ పంటల కోసం నివారణ చర్యలు',
      expertHelpAdvice: 'నిపుణుల సహాయం ఎప్పుడు తీసుకోవాలి',
      saveScan: 'స్కాన్ సేవ్ చేయండి',
      savedInHistory: 'చరిత్రలో సేవ్ అయింది',
      scanAnother: 'మరో ఆకు స్కాన్ చేయండి',
      viewHistory: 'స్కాన్ చరిత్ర చూడండి',
      downloadImage: 'సారాంశ చిత్రాన్ని డౌన్‌లోడ్ చేయండి',
      printReport: 'రిపోర్ట్ ప్రింట్ చేయండి',
      noActiveResultTitle: 'ఏ స్కాన్ ఎంచుకోబడలేదు',
      noActiveResultBody: 'పూర్తి మార్గదర్శనం చూడటానికి కొత్త ఆకు ఫోటోను అప్‌లోడ్ చేయండి లేదా చరిత్ర నుండి సేవ్ చేసిన స్కాన్‌ను ఎంచుకోండి.',
      riskLabelSuffix: 'ప్రమాదం',
      translatingGuidance: 'సేవ్ చేసిన మార్గదర్శనాన్ని అనువదిస్తున్నాము…',
      translationUnavailableTitle: 'అనువాదం అందుబాటులో లేదు',
      translationUnavailableBody: 'ఈ సేవ్ చేసిన మార్గదర్శనాన్ని ప్రస్తుతం అనువదించలేకపోయాము. దయచేసి మళ్ళీ ప్రయత్నించండి.',
      feedbackQuestion: 'ఈ మార్గదర్శనం ఉపయోగకరంగా ఉందా?',
      feedbackOptions: {
        helpful: 'అవును, ఉపయోగకరంగా ఉంది',
        unsure: 'ఖచ్చితంగా తెలియదు',
        needs_correction: 'మార్పు అవసరం',
      },
      feedbackSavedNote: 'మీ అభిప్రాయం ఈ పరికరంలో సేవ్ అయింది.',
    },
    history: {
      title: 'స్కాన్ చరిత్ర',
      subtitle: 'ఈ పరికరంలో సేవ్ చేయబడిన మీ పంట ఆకు స్క్రీనింగ్‌లు.',
      searchPlaceholder: 'తెగులు, పంట లేదా గమనికల ద్వారా వెతకండి…',
      emptyTitle: 'ఇంకా సేవ్ చేసిన స్కాన్‌లు లేవు',
      emptyBody: 'మీరు ఆకు స్కాన్‌ను విశ్లేషించి సేవ్ చేసిన తర్వాత, అది ఇక్కడ కనిపిస్తుంది.',
      noMatchesTitle: 'సరిపోయే స్కాన్‌లు లేవు',
      noMatchesBody: 'దయచేసి శోధన పదాన్ని మార్చండి లేదా పంట ఫిల్టర్‌ను తీసివేయండి.',
      clearFilters: 'ఫిల్టర్లు క్లియర్ చేయండి',
      deleteConfirmTitle: 'ఈ స్కాన్‌ను తొలగించాలా?',
      deleteConfirmBody: 'ఇది ఎంచుకున్న స్క్రీనింగ్ రికార్డును ఈ పరికరం నుండి తొలగిస్తుంది.',
      openDetails: 'ఫలితం తెరవండి',
    },
    insights: {
      title: 'పంట విశ్లేషణ',
      subtitle: 'మీరు సేవ్ చేసిన స్కాన్ చరిత్ర ఆధారంగా మాత్రమే లెక్కించబడిన గణాంకాలు.',
      insufficientTitle: 'విశ్లేషణ కోసం కనీసం 2 సేవ్ చేసిన స్కాన్‌లు అవసరం',
      insufficientBody: 'వారపు స్కాన్ ట్రెండ్‌లు, పంట పోలికలు మరియు తెగులు పంపిణీ చార్టులను చూడటానికి కనీసం రెండు ఆకు స్కాన్‌లను సేవ్ చేయండి.',
      weeklyTrendTitle: 'వారం వారీగా స్కాన్ ట్రెండ్',
      diseaseDistTitle: 'సంభావ్య తెగుళ్ళ పంపిణీ',
      cropSplitTitle: 'మద్దతు ఉన్న పంటల వారీ స్కాన్‌లు',
      riskBreakdownTitle: 'ప్రమాద స్థాయి విభజన',
      mostCommonTitle: 'ఎక్కువగా కనిపించిన పరిశీలన',
      scansUnit: 'స్కాన్‌లు',
      checklistTitle: 'సీజన్ పంట సంరక్షణ చెక్‌లిస్ట్',
      checklistSubtitle: 'మా 6 మద్దతు ఉన్న పంటల కోసం వారపు జాగ్రత్తలు. మీ ప్రగతి ఈ పరికరంలో సేవ్ అవుతుంది.',
    },
    knowledge: {
      title: 'సమాచార కేంద్రం',
      subtitle: 'మా 6 మద్దతు ఉన్న పంటల (18 తెగుళ్ళు) కోసం సురక్షితమైన, నమ్మకమైన మార్గదర్శనం.',
      searchPlaceholder: 'తెగులు, పంట లేదా లక్షణం వెతకండి…',
      farmerFriendlyToggle: 'రైతులకు సులభమైన భాష',
      farmerFriendlyDesc: 'చిన్న, సులభమైన వివరణలకు మారండి',
      commonSymptoms: 'సాధారణ లక్షణాలు',
      likelyCause: 'సంభావ్య కారణం',
      safeNextActions: 'సురక్షిత తదుపరి చర్యలు',
      prevention: 'నివారణ',
      whenToSeekHelp: 'నిపుణుల సహాయం ఎప్పుడు తీసుకోవాలి',
      noResults: 'సరిపోయే సమాచారం కనుగొనబడలేదు.',
    },
    settings: {
      title: 'సెట్టింగ్స్',
      subtitle: 'మీ రైతు ప్రొఫైల్, ఇష్టమైన భాష మరియు పరికర నిల్వను నిర్వహించండి.',
      profileSection: 'రైతు ప్రొఫైల్',
      farmerNameLabel: 'రైతు పేరు',
      regionLabel: 'గ్రామం / పొలం గమనిక (ఐచ్ఛికం)',
      regionPlaceholder: 'ఉదాహరణ: ప్లాట్ 2, ఎర్ర నేల',
      languageSection: 'ఇష్టమైన భాష',
      languageHelp: 'మెనూ, స్కాన్ దశలు, తెగులు మార్గదర్శనం మరియు AI ఫలితాల భాషను మారుస్తుంది.',
      privacySection: 'గోప్యత & భద్రత',
      privacyNote: 'ఫోటోలు కేవలం తెగులు స్క్రీనింగ్ కోసం మాత్రమే ఉపయోగించబడతాయి. క్లౌడ్ సింక్ ఆన్ చేయకపోతే స్కాన్ చరిత్ర ఈ పరికరంలోనే నిల్వ చేయబడుతుంది.',
      safetyNote: 'ఆరోగ్య కేర్ ప్రో 6 మద్దతు ఉన్న పంటలకు సమాచార స్క్రీనింగ్ మాత్రమే ఇస్తుంది; ఇది అర్హత కలిగిన వ్యవసాయ సలహాకు ప్రత్యామ్నాయం కాదు. పురుగుమందుల బ్రాండ్‌లు లేదా మోతాదులు ఇందులో ఉండవు.',
      localDataSection: 'పరికరంలోని స్థానిక డేటా',
      localDataDesc: 'ఈ బ్రౌజర్‌లో సేవ్ చేయబడిన అన్ని స్కాన్‌లు, చెక్‌లిస్ట్ మరియు ప్రొఫైల్ వివరాలను తొలగించండి.',
      resetButton: 'స్థానిక డేటా మొత్తం రీసెట్ చేయండి',
      resetConfirmTitle: 'మొత్తం స్థానిక డేటాను తొలగించాలా?',
      resetConfirmBody: 'ఇది ఈ బ్రౌజర్ నుండి సేవ్ చేసిన స్కాన్‌లు, చెక్‌లిస్ట్ మరియు ప్రొఫైల్ సెట్టింగ్స్‌ను శాశ్వతంగా తొలగిస్తుంది.',
      resetConfirmAction: 'అవును, మొత్తం తొలగించండి',
      savedToast: 'ప్రొఫైల్ సెట్టింగ్స్ సేవ్ అయ్యాయి',
      resetToast: 'స్థానిక డేటా మొత్తం క్లియర్ చేయబడింది',
    },
  },
  hi: {
    brandName: 'आरोग्य केयर प्रो',
    tagline: 'हर किसान की भाषा में फसल स्वास्थ्य मार्गदर्शन।',
    nav: {
      overview: 'अवलोकन',
      scan: 'फसल स्कैन',
      history: 'स्कैन इतिहास',
      insights: 'फसल विश्लेषण',
      knowledge: 'ज्ञान केंद्र',
      settings: 'सेटिंग्स',
    },
    common: {
      tomato: 'टमाटर',
      chili: 'मिर्च',
      potato: 'आलू',
      rice: 'धान',
      cotton: 'कपास',
      maize: 'मक्का',
      allCrops: 'सभी फसलें',
      low: 'कम',
      medium: 'मध्यम',
      high: 'उच्च',
      save: 'सहेजें',
      saved: 'सहेजा गया',
      cancel: 'रद्द करें',
      delete: 'हटाएं',
      confirmDelete: 'हटाने की पुष्टि करें',
      edit: 'बदलें',
      close: 'बंद करें',
      retry: 'पुनः प्रयास करें',
      basedOnSavedScans: 'सहेजे गए स्कैन पर आधारित',
      demoData: 'डेमो डेटा',
      includesDemoData: 'डेमो डेटा सहित',
      disclaimer: 'यह जांच केवल जानकारी के लिए है। गंभीर फसल समस्याओं की पुष्टि योग्य कृषि विशेषज्ञ से अवश्य कराएं।',
      confidence: 'विश्वास स्तर',
      severity: 'जोखिम स्तर',
      crop: 'फसल',
      date: 'तारीख',
      notes: 'नोट्स',
      farmerProfile: 'किसान प्रोफ़ाइल',
      language: 'भाषा',
      scanLeafCta: 'फसल का पत्ता स्कैन करें',
      loadDemoData: 'नमूना स्कैन लोड करें (डेमो डेटा)',
    },
    overview: {
      welcomePrefix: 'नमस्ते,',
      editName: 'नाम बदलें',
      namePlaceholder: 'किसान का नाम लिखें',
      subtitle: 'हर किसान की भाषा में फसल स्वास्थ्य मार्गदर्शन।',
      healthOverviewTitle: 'फसल स्वास्थ्य अवलोकन',
      totalScans: 'कुल स्कैन',
      lowRiskScans: 'कम जोखिम वाले स्कैन',
      attentionNeeded: 'ध्यान देने योग्य स्कैन',
      mostCommonIssue: 'सबसे आम संभावित समस्या',
      recentScansTitle: 'हाल के स्कैन',
      viewAllHistory: 'इतिहास देखें',
      actionCentreTitle: 'कार्रवाई केंद्र',
      actionCentreSubtitle: 'आपके सहेजे गए पत्ता स्कैन से तैयार सुझाव',
      feedbackCardTitle: 'मार्गदर्शन प्रतिक्रिया',
      feedbackCardSubtitle: 'सहेजे गए परिणामों पर किसान प्रतिक्रिया',
      noFeedbackYet: 'सलाह की उपयोगिता ट्रैक करने के लिए किसी परिणाम पर रेटिंग दें।',
      emptyTitle: 'अभी कोई पत्ता स्कैन सहेजा नहीं गया है',
      emptyBody: 'जानकारीपूर्ण रोग जांच और सुरक्षित देखभाल सुझाव पाने के लिए टमाटर, मिर्च, आलू, धान, कपास या मक्का के पत्ते की साफ फोटो अपलोड करें।',
      noIssueYet: 'अभी कोई स्कैन नहीं',
      openResult: 'परिणाम देखें',
      highRiskAlertTitle: 'खेत की प्राथमिकता जांच जरूरी',
      highRiskAlertBody: 'आपके इतिहास में उच्च जोखिम वाले परिणाम हैं। आज ही पास के पौधों की जांच करें, ऊपर से पानी डालना रोकें और स्थानीय कृषि अधिकारी से संपर्क करें।',
      mediumRiskTitle: 'अधिक प्रभावित पत्तों को सुरक्षित रूप से हटाएं',
      mediumRiskBody: 'मध्यम जोखिम वाले स्कैन के लिए, धब्बों वाले निचले पत्तों को हटाएं और कतारों के बीच हवा का बहाव बढ़ाएं।',
      routineMonitoringTitle: 'साप्ताहिक पत्ती जांच जारी रखें',
      routineMonitoringBody: 'आपके सहेजे गए स्कैन अभी कम जोखिम दिखाते हैं। सुबह जड़ों के पास सिंचाई और पत्तों के नीचे की जांच जारी रखें।',
      checkKnowledgeTitle: 'फसल देखभाल मार्गदर्शिका देखें',
      checkKnowledgeBody: 'हमारी 6 समर्थित फसलों के लिए आसान भाषा में लक्षण और बचाव के तरीके ज्ञान केंद्र में कभी भी पढ़ें।',
    },
    scan: {
      title: 'फसल का पत्ता स्कैन करें',
      subtitle: 'सही परिणाम के लिए नीचे दिए गए चरणों का पालन करें।',
      steps: ['फसल चुनें', 'पत्ते की फोटो अपलोड करें', 'फोटो गुणवत्ता जांचें', 'विश्लेषण', 'परिणाम देखें'],
      step1Title: '1. फसल चुनें',
      step1LimitNote: 'आरोग्य केयर प्रो अभी केवल 6 फसलों (18 रोगों) का समर्थन करता है। यह दुनिया के हर पौधे या रोग की जांच नहीं कर सकता।',
      supportedConditionsCount: '3 समर्थित स्थितियां',
      selectCropAction: 'फसल चुनें',
      selectedLabel: 'चयनित',
      autoDetectLabel: 'फसल स्वतः पहचानें (बीटा)',
      autoDetectBetaBadge: 'बीटा',
      autoDetectDesc: 'यदि आप सुनिश्चित नहीं हैं कि पत्ता हमारी 6 फसलों में से किसका है, तो फोटो अपलोड करके सुझाव पाएं और फिर पुष्टि करें।',
      detectCropButton: 'फसल पहचानें (बीटा)',
      detectingCropStatus: 'जांचा जा रहा है कि पत्ता हमारी 6 समर्थित फसलों में से किससे मेल खाता है…',
      suggestedCropLabel: 'सुझाई गई फसल',
      confirmCropPrompt: 'रोग विश्लेषण से पहले कृपया पुष्टि करें।',
      autoDetectNote: 'स्वतः पहचान केवल सुविधा के लिए है, यह रोग का निदान नहीं है।',
      confirmCropButton: 'फसल की पुष्टि करें और आगे बढ़ें',
      chooseDifferentCrop: 'या ऊपर दिए गए ग्रिड से दूसरी फसल चुनें।',
      autoDetectUnsupported: 'यह फोटो हमारी 6 समर्थित फसलों (टमाटर, मिर्च, आलू, धान, कपास, मक्का) से स्पष्ट रूप से मेल नहीं खाती। कृपया सही फसल चुनें या “अन्य / असमर्थित फसल” चुनें।',
      autoDetectError: 'फोटो से फसल की पहचान नहीं हो सकी। कृपया फसल स्वयं चुनें।',
      otherCropTitle: 'अन्य / असमर्थित फसल',
      otherCropDesc: 'मेरी फसल टमाटर, मिर्च, आलू, धान, कपास या मक्का नहीं है',
      unsupportedNotice: 'यह फसल वर्तमान में आरोग्य केयर के समर्थित रोग पुस्तकालय में शामिल नहीं है।',
      supportedCropsListLabel: 'वर्तमान समर्थित फसलें (बदलने के लिए क्लिक करें):',
      browseKnowledgeHub: 'ज्ञान केंद्र देखें',
      requestCropTitle: 'नई फसल सहायता का अनुरोध करें',
      requestCropNameLabel: 'फसल का नाम',
      requestCropNamePlaceholder: 'उदाहरण: बैंगन, मूंगफली, भिंडी, सोयाबीन…',
      requestCropRegionLabel: 'गांव / जिला नोट (वैकल्पिक)',
      requestCropRegionPlaceholder: 'उदाहरण: इंदौर, खरीफ मौसम',
      requestCropSubmit: 'अनुरोध भेजें',
      requestCropSaved: 'धन्यवाद। आपका फसल अनुरोध इस डिवाइस पर सहेजा गया है।',
      requestCropRequired: 'कृपया उस फसल का नाम लिखें जिसके लिए आप सहायता चाहते हैं।',
      step2Title: '2. पत्ते की फोटो अपलोड करें',
      dropzoneTitle: 'पत्ते की फोटो यहां छोड़ें या डिवाइस से चुनें',
      dropzoneHint: 'केवल JPG, JPEG, PNG फाइलें, अधिकतम 10 MB',
      chooseFile: 'फोटो चुनें',
      takePhoto: 'कैमरा खोलें',
      replaceImage: 'फोटो बदलें',
      removeImage: 'हटाएं',
      invalidFileType: 'कृपया केवल JPG, JPEG या PNG छवि फाइल ही अपलोड करें।',
      fileTooLarge: 'यह फोटो 10 MB से बड़ी है। कृपया 10 MB से छोटी फोटो चुनें।',
      step3Title: '3. फोटो गुणवत्ता और पत्ते का विवरण',
      qualityAssistantTitle: 'फोटो गुणवत्ता सहायक',
      qualityChecking: 'फोटो की स्पष्टता और रोशनी जांची जा रही है…',
      qualityRatings: { Good: 'अच्छी', Fair: 'सामान्य', Poor: 'कमजोर' },
      qualityReasons: {
        good: 'पत्ता साफ और अच्छी रोशनी में है।',
        fair: 'हल्का धुंधलापन या असमान रोशनी दिखी। दिन की साफ रोशनी में फोटो और बेहतर आ सकती है।',
        poor: 'फोटो धुंधली या बहुत अंधेरी है।',
      },
      poorQualityWarning: 'फोटो की गुणवत्ता कमजोर है। आप आगे बढ़ सकते हैं, या दिन की रोशनी में एक साफ फोटो बदल सकते हैं।',
      goodExampleLabel: 'सही उदाहरण: एक पत्ता, दिन की रोशनी, साफ फोकस',
      goodExampleDesc: 'दिन की साफ रोशनी में एक पत्ता स्थिर पकड़ें ताकि धब्बे साफ दिखें।',
      badExampleLabel: 'गलत उदाहरण: धुंधली फोटो, कई पत्ते, कम रोशनी',
      badExampleDesc: 'हिली हुई धुंधली फोटो, गहरी छाया और आपस में उलझे पत्तों से बचें।',
      leafAgeLabel: 'पत्ते की उम्र',
      leafAges: { young: 'नया पत्ता', mature: 'पुराना पत्ता', unknown: 'पता नहीं' },
      symptomLabel: 'दिखने वाला लक्षण',
      symptoms: {
        spots: 'धब्बे या निशान',
        curling: 'मुड़ना या सिकुड़ना',
        yellowing: 'पीला पड़ना',
        white_powder: 'सफेद पाउडर',
        unknown: 'पता नहीं',
      },
      notesLabel: 'किसान के नोट्स (वैकल्पिक)',
      notesPlaceholder: 'उदाहरण: दो दिन बारिश के बाद नीचे के पत्ते भूरे हो रहे हैं...',
      analyzeButton: 'पत्ते की फोटो का विश्लेषण करें',
      analyzingStep1: 'पत्ते पर दिख रहे पैटर्न की जांच हो रही है…',
      analyzingStep2: 'संभावित रोग परिणाम तैयार किया जा रहा है…',
      analysisErrorTitle: 'जांच पूरी नहीं हो सकी',
    },
    result: {
      heading: 'संभावित रोग अनुमान',
      inconclusiveTitle: 'विश्वसनीय आकलन संभव नहीं',
      inconclusiveBadge: 'कम गुणवत्ता / अनिश्चित स्कैन',
      inconclusiveGuidance1: 'दिन की रोशनी में एक ही पत्ते की एक साफ और तेज फोटो लें।',
      inconclusiveGuidance2: 'छाया, धुंधलापन, मिट्टी लगे पत्तों और एक साथ कई पत्तों से बचें।',
      inconclusiveMismatchNote: 'इस फसल के लिए जांच विवरण सुसंगत नहीं थे, इसलिए रोग अनुमान नहीं दिखाया गया।',
      cropMismatchTitle: 'यह तस्वीर चुनी गई फसल से मेल नहीं खाती दिखती है।',
      cropMismatchBody: 'गलत अनुमान से बचने के लिए कोई रोग निदान नहीं बनाया गया। कृपया सही फसल चुनें या दूसरी पत्ती की फोटो अपलोड करें।',
      cropMismatchSuggestedPrefix: 'समर्थित फसलों में सबसे निकट मिलान:',
      selectCorrectCrop: 'सही फसल चुनें',
      tryAnotherPhoto: 'दूसरी फोटो आज़माएं',
      photoQuality: 'फोटो गुणवत्ता अवलोकन',
      symptomsObserved: 'देखे गए लक्षण',
      likelyCause: 'संभावित कारण',
      immediateActions: 'तुरंत करने योग्य कम-जोखिम उपाय',
      preventionSteps: 'आने वाली फसल के लिए बचाव',
      expertHelpAdvice: 'विशेषज्ञ की मदद कब लें',
      saveScan: 'स्कैन सहेजें',
      savedInHistory: 'इतिहास में सहेजा गया',
      scanAnother: 'एक और पत्ता स्कैन करें',
      viewHistory: 'स्कैन इतिहास देखें',
      downloadImage: 'सारांश इमेज डाउनलोड करें',
      printReport: 'रिपोर्ट प्रिंट करें',
      noActiveResultTitle: 'कोई स्कैन चयनित नहीं है',
      noActiveResultBody: 'पूरा मार्गदर्शन देखने के लिए नया पत्ता स्कैन करें या इतिहास से सहेजा गया स्कैन चुनें।',
      riskLabelSuffix: 'जोखिम',
      translatingGuidance: 'सहेजे गए मार्गदर्शन का अनुवाद हो रहा है…',
      translationUnavailableTitle: 'अनुवाद उपलब्ध नहीं है',
      translationUnavailableBody: 'अभी इस सहेजे गए मार्गदर्शन का अनुवाद नहीं हो सका। कृपया पुनः प्रयास करें।',
      feedbackQuestion: 'क्या यह मार्गदर्शन उपयोगी था?',
      feedbackOptions: {
        helpful: 'हां, उपयोगी है',
        unsure: 'निश्चित नहीं',
        needs_correction: 'सुधार की जरूरत है',
      },
      feedbackSavedNote: 'प्रतिक्रिया इस डिवाइस पर सहेजी गई।',
    },
    history: {
      title: 'स्कैन इतिहास',
      subtitle: 'इस डिवाइस पर सहेजे गए आपके फसल पत्ता स्कैन।',
      searchPlaceholder: 'रोग, फसल या नोट्स से खोजें…',
      emptyTitle: 'अभी कोई सहेजा गया स्कैन नहीं है',
      emptyBody: 'जब आप किसी पत्ते की जांच को सहेजेंगे, तो वह यहां दिखाई देगा।',
      noMatchesTitle: 'कोई मिलता-जुलता स्कैन नहीं मिला',
      noMatchesBody: 'खोज शब्द बदलें या फसल फ़िल्टर साफ़ करें।',
      clearFilters: 'फ़िल्टर साफ़ करें',
      deleteConfirmTitle: 'यह स्कैन हटाएं?',
      deleteConfirmBody: 'यह चयनित जांच रिकॉर्ड को इस डिवाइस से हटा देगा।',
      openDetails: 'परिणाम खोलें',
    },
    insights: {
      title: 'फसल विश्लेषण',
      subtitle: 'केवल आपके सहेजे गए स्कैन इतिहास से निकाले गए वास्तविक आंकड़े।',
      insufficientTitle: 'विश्लेषण के लिए कम से कम 2 सहेजे गए स्कैन जरूरी हैं',
      insufficientBody: 'साप्ताहिक रुझान, फसल तुलना और रोग वितरण चार्ट देखने के लिए कम से कम दो स्कैन सहेजें। हम कभी नकली आंकड़े नहीं दिखाते।',
      weeklyTrendTitle: 'साप्ताहिक स्कैन रुझान',
      diseaseDistTitle: 'संभावित रोग वितरण',
      cropSplitTitle: 'समर्थित फसलों के अनुसार स्कैन',
      riskBreakdownTitle: 'जोखिम स्तर विवरण',
      mostCommonTitle: 'सबसे आम अवलोकन',
      scansUnit: 'स्कैन',
      checklistTitle: 'मौसमी फसल देखभाल चेकलिस्ट',
      checklistSubtitle: 'हमारी 6 समर्थित फसलों के लिए साप्ताहिक आदतें। आपकी प्रगति डिवाइस पर सहेजी जाती है।',
    },
    knowledge: {
      title: 'ज्ञान केंद्र',
      subtitle: 'हमारी 6 समर्थित फसलों (18 रोगों) के लिए सुरक्षित और भरोसेमंद मार्गदर्शन।',
      searchPlaceholder: 'रोग, फसल या लक्षण खोजें…',
      farmerFriendlyToggle: 'किसान-अनुकूल आसान भाषा',
      farmerFriendlyDesc: 'छोटे और आसान विवरण पर स्विच करें',
      commonSymptoms: 'सामान्य लक्षण',
      likelyCause: 'संभावित कारण',
      safeNextActions: 'सुरक्षित अगले कदम',
      prevention: 'बचाव के उपाय',
      whenToSeekHelp: 'विशेषज्ञ से मदद कब लें',
      noResults: 'कोई मिलता-जुलता रोग नहीं मिला।',
    },
    settings: {
      title: 'सेटिंग्स',
      subtitle: 'अपनी किसान प्रोफ़ाइल, पसंदीदा भाषा और डिवाइस स्टोरेज प्रबंधित करें।',
      profileSection: 'किसान प्रोफ़ाइल',
      farmerNameLabel: 'किसान का नाम',
      regionLabel: 'गांव / खेत नोट (वैकल्पिक)',
      regionPlaceholder: 'उदाहरण: प्लॉट 2, लाल मिट्टी ब्लॉक',
      languageSection: 'पसंदीदा भाषा',
      languageHelp: 'नेविगेशन, स्कैन चरण, रोग मार्गदर्शन और AI जांच की भाषा बदलता है।',
      privacySection: 'गोपनीयता और सुरक्षा',
      privacyNote: 'फ़ोटो केवल रोग जांच के लिए प्रोसेस की जाती हैं। क्लाउड सिंक चालू न होने तक स्कैन इतिहास इसी डिवाइस पर सहेजा जाता है।',
      safetyNote: 'आरोग्य केयर प्रो केवल 6 समर्थित फसलों के लिए जानकारीपूर्ण जांच प्रदान करता है और योग्य कृषि सलाह का विकल्प नहीं है। यह कभी कीटनाशक ब्रांड नाम या रसायन की मात्रा नहीं बताता।',
      localDataSection: 'स्थानीय डिवाइस डेटा',
      localDataDesc: 'इस ब्राउज़र में सहेजा गया सारा स्कैन इतिहास, चेकलिस्ट और प्रोफ़ाइल डेटा हटाएं।',
      resetButton: 'सारा स्थानीय डेटा रीसेट करें',
      resetConfirmTitle: 'सारा स्थानीय डेटा साफ़ करें?',
      resetConfirmBody: 'यह इस ब्राउज़र से सभी सहेजे गए स्कैन, चेकलिस्ट और प्रोफ़ाइल जानकारी को स्थायी रूप से हटा देगा।',
      resetConfirmAction: 'हां, सारा डेटा हटाएं',
      savedToast: 'प्रोफ़ाइल सेटिंग्स सहेजी गईं',
      resetToast: 'सारा स्थानीय डेटा साफ़ कर दिया गया',
    },
  },
};
