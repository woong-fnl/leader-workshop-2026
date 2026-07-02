// ============================================================
//  data.js — 이 파일만 수정하면 내용이 전체 반영됩니다.
// ============================================================

const EVENT = {

  // ── 접근 PIN ───────────────────────────────────────────────
  pin: '260709',

  // ── 기본 정보 ──────────────────────────────────────────────
  title:    "2026 에프앤엘 리더십 워크숍",
  subtitle: "고민은 나누고 비전은 맞추고, 함께 걷는 에프앤엘",
  date:     "2026년 7월 9일(목) – 10일(금)",
  time:     "Day 1  09:00 – Day 2  15:00",
  venue:    "포유포레 (경기 가평)",
  address:  "경기도 가평군 포유포레",
  notice:   "",

  // ── 참석자 목록 ────────────────────────────────────────────
  // title / name / division / team / phone
  attendees: [
    { name: "이상훈", title: "CEO",           division: "대표이사",               team: "-",                        phone: "010-9507-5457" },
    { name: "한송희", title: "CEO",           division: "대표이사",               team: "-",                        phone: "010-6775-1102" },
    { name: "정이한", title: "Group Leader",  division: "Operation Group",       team: "Operation Group",          phone: "010-8690-5192" },
    { name: "이종국", title: "Group Leader",  division: "Global Sales Group",    team: "Global Sales Group",       phone: "010-9918-3551" },
    { name: "이동주", title: "Center Leader", division: "Operation Group",       team: "Logistics Team",           phone: "010-9066-8107" },
    { name: "유아진", title: "Team Leader",   division: "KR Biz Group",          team: "KR Marketing Team",        phone: "010-8447-4955" },
    { name: "마준성", title: "Team Leader",   division: "Global Sales Group",    team: "SEA Team",                 phone: "010-5283-8280" },
    { name: "김준범", title: "Team Leader",   division: "Global Marketing Group",team: "JP Team",                  phone: "010-9434-0221" },
    { name: "손은호", title: "Team Leader",   division: "CEO Direct",            team: "FA Team",                  phone: "010-7731-1221" },
    { name: "김성수", title: "Team Leader",   division: "CEO Direct",            team: "HR&GA Team",               phone: "010-3020-6395" },
    { name: "강수지", title: "Team Leader",   division: "CEO Direct",            team: "CEO Staff",                phone: "010-2614-0738" },
    { name: "오주은", title: "Team Leader",   division: "CEO Direct",            team: "Design Team",              phone: "010-7189-6762" },
    { name: "이성필", title: "Team Leader",   division: "CEO Direct",            team: "Redence Marketing Team",   phone: "010-6383-3833" },
    { name: "김수인", title: "Team Leader",   division: "CEO Direct",            team: "Influencer Team",          phone: "010-8964-0615" },
    { name: "김재환", title: "Part Leader",   division: "CEO Direct",            team: "F&B Part",                 phone: "010-3221-2594" },
    { name: "송유진", title: "Part Leader",   division: "CEO Direct",            team: "Beauty Part",              phone: "010-9464-8203" },
    { name: "황대로", title: "Staff",         division: "CEO Direct",            team: "HR&GA Team",               phone: "010-2446-6517" },
    { name: "조원웅", title: "Staff",         division: "CEO Direct",            team: "HR&GA Team",               phone: "010-2060-3816" },
    { name: "김지민", title: "Staff",         division: "CEO Direct",            team: "HR&GA Team",               phone: "010-5469-5442" },
  ],

  // ── 숙소 정보 (포유포레) ──────────────────────────────────
  accommodation: {
    name:        "포유포레",
    locationUrl: "https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88",

    // 와이파이 (현장 확인 후 입력)
    wifi: [
      { ssid: "입력 예정", password: "입력 예정", note: "현장 도착 후 안내드립니다." },
    ],

    // 방배정
    rooms: [
      { room: "201호", type: "온돌룸",                      occupants: ["이상훈"],                                         note: "" },
      { room: "202호", type: "베드룸(퀸1) · 복층 · 화장실", occupants: ["황대로", "조원웅", "김지민", "김성수"],            note: "Staff" },
      { room: "301호", type: "베드룸(퀸1+싱글1)",           occupants: ["정이한", "손은호"],                               note: "" },
      { room: "302호", type: "온돌룸 · 주방시설",           occupants: ["이동주"],                                         note: "" },
      { room: "303호", type: "베드룸(퀸1+싱글1) · 화장실",  occupants: ["마준성", "이성필"],                               note: "" },
      { room: "304호", type: "온돌룸",                      occupants: ["김재환", "김준범"],                               note: "중문으로 구분" },
      { room: "305호", type: "베드룸(퀸1) · 화장실",        occupants: ["이종국"],                                         note: "중문으로 구분" },
      { room: "401호", type: "베드룸(퀸1)",                 occupants: ["한송희"],                                         note: "여자 숙소 (남자 출입 금지)" },
      { room: "402호", type: "베드룸(퀸1+싱글1)",           occupants: ["유아진", "강수지", "오주은", "김수인", "송유진"],  note: "여자 숙소 (남자 출입 금지)" },
    ],

    // 층별 시설 안내
    floors: [
      {
        label: "1층",
        note:  "주차장에서 문이 연결되어 있어요.",
        spaces: [
          { name: "대형세미나실", desc: "실제 세션이 진행되는 장소입니다.",                                                      image: "seminar.png",    icon: "ti-presentation" },
          { name: "멀티룸",       desc: "대형스크린과 리클라이너소파가 있습니다. 편하게 쉬면서 이야기하는 공간으로 적당해요.", image: "multiroom.JPEG", icon: "ti-device-tv" },
          { name: "스크린골프",   desc: "",                                                                                       image: "screengolf.png", icon: "ti-golf" },
        ],
      },
      {
        label: "2층",
        note:  "",
        spaces: [
          { name: "공용주방",           desc: "첫째 날 저녁식사 장소에요.",                                                        image: "kitchen.JPEG", icon: "ti-chef-hat" },
          { name: "야외 정원",          desc: "2층에서 야외 정원으로 나갈 수 있어요. 정원 뒤편에 흡연장소도 마련되어 있습니다.", image: "garden.JPEG",  icon: "ti-plant-2" },
          { name: "객실 201호 / 202호", desc: "",                                                                                   image: "room-2f.JPEG", icon: "ti-bed" },
        ],
      },
      {
        label: "3층",
        note:  "",
        spaces: [
          { name: "객실 301호 · 302호 · 303호 · 304호 · 305호", desc: "", image: "room-3f.JPEG", icon: "ti-bed" },
        ],
      },
      {
        label: "4층",
        note:  "🚫 남성 출입 금지 : 편안한 휴식을 위해 배려해주세요",
        spaces: [
          { name: "객실 401호 / 402호", desc: "", image: "room-4f.JPEG", icon: "ti-bed" },
        ],
      },
    ],

    // 흡연구역 { spot, desc, images[] } — images: images/facilities/ 폴더에 넣어주세요
    smokingAreas: [
      { spot: "Spot 1", desc: "2층 야외정원 건물 뒤편에 있어요",                                                                    images: [] },
      { spot: "Spot 2", desc: "외부현관에서 바로 들어가거나, 주차장에 있는 문을 통해 갈 수 있어요.", images: ["smoking-spot2.jpg", "smoking-spot2_1.jpg"] },
    ],

    // Day 2 조식 안내
    breakfast: {
      time:     "08:00 – 09:00",
      location: "2층 공용주방",
      menu:     "",
      note:     "드신 후, 뒷정리도 부탁드려요 :)",
      desc:     "2층 공용주방에서 자유롭게 식사해주세요.",
    },

    cafes: [],
  },

  // ── 일정 ──────────────────────────────────────────────────
  days: [
    {
      label: "Day 1",
      date:  "7월 9일 (목)",
      items: [
        { time:"09:00 – 09:30", title:"집합",                         desc:"",                                                                                                                                                                                                                                                              note:"",                            location:"생각공장 당산 미팅룸 E",   locationUrl:"https://map.naver.com/v5/search/%EC%83%9D%EA%B0%81%EA%B3%B5%EC%9E%A5%20%EB%8B%B9%EC%82%B0", type:"session" },
        { time:"09:30 – 11:00", title:"이동",                         desc:"생각공장 당산 → 가평레저카트장",                                                                                                                                                                                                                               note:"버스",                        location:"",                          locationUrl:"",                                                                                            type:"move" },
        { time:"11:00 – 12:00", title:"액티비티 (카트 + 사격)",       desc:"카트 1인승 + 사격",                                                                                                                                                                                                                                             note:"가평레저카트장",              activityId:"kart",        location:"가평레저카트장",          locationUrl:"https://map.naver.com/v5/search/%EA%B0%80%ED%8F%89%EB%A0%88%EC%A0%80%EC%B9%B4%ED%8A%B8%EC%9E%A5", type:"activity" },
        { time:"12:00 – 13:30", title:"점심 식사",                    desc:"BBQ와 수제맥주",                                                                                                                                                                                                                                               activityId:"lunch-day1", note:"",  location:"크레머리",                locationUrl:"https://map.naver.com/v5/search/%ED%81%AC%EB%A0%88%EB%A8%B8%EB%A6%AC%20%EA%B0%80%ED%8F%89",       type:"break" },
        { time:"13:30 – 14:00", title:"이동",                         desc:"크레머리 → 포유포레",                                                                                                                                                                                                                                          note:"버스",                        location:"",                          locationUrl:"",                                                                                            type:"move" },
        { time:"14:00 – 14:30", title:"도착 및 룸 배정",              desc:"워크숍 장소 도착 및 오리엔테이션",                                                                                                                                                                                                                             note:"",                            location:"포유포레",                locationUrl:"https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88",                           type:"session" },
        { time:"14:30 – 15:30", title:"개인 정비",                    desc:"",                                                                                                                                                                                                                                                              note:"",                            location:"포유포레",                locationUrl:"https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88",                           type:"break" },
        { time:"15:30 – 16:10", title:"Session 1 — 회사 방향성 및 인사체계 Sync", desc:"① 사업계획 수립: 일정 및 목적 공유\n② 인사체계 안내: 직무, Job Level, 직책, 평가, 보상 기준 등\n③ 타운홀 안내: 리더들이 먼저 인지해야 할 타운홀 미팅 가이드",                                                                              note:"성수 발언 + Q&A",             location:"포유포레",                locationUrl:"https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88",                           type:"keynote" },
        { time:"16:10 – 16:30", title:"휴식 시간",                    desc:"",                                                                                                                                                                                                                                                              note:"",                            location:"",                          locationUrl:"",                                                                                            type:"break" },
        { time:"16:30 – 18:00", title:"Session 2 — 에프앤엘의 문제 마주하기", desc:"① 문화적 문제: 회사가 겪고 있는 소통/협업의 병목 구간 공유\n② 개인의 고충: 팀을 운영하며 겪는 리더들의 현실적인 어려움\n→ 넋두리가 아니라, 함께 해결해야 할 공식 안건으로 인지",                                                              note:"대표는 조력자의 역할로 인식", location:"포유포레",                locationUrl:"https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88",                           type:"keynote" },
        { time:"18:00 – 18:10", title:"휴식 시간",                    desc:"",                                                                                                                                                                                                                                                              note:"",                            location:"",                          locationUrl:"",                                                                                            type:"break" },
        { time:"18:10 – 20:30", title:"만찬 및 네트워킹",             desc:"맛있는 저녁을 먹으며 편안한 분위기로 유대감 형성",                                                                                                                                                                                                             note:"2층 공용주방",                activityId:"dinner",      location:"포유포레",                locationUrl:"https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88",                           type:"networking" },
        { time:"20:30 – 22:00", title:"Session 3 — 안도감 → 영향력", desc:"나만 힘든 게 아니고, 모두가 고충이 있구나… 감정 터치\n그렇다면 리더로서 에프앤엘을 어떻게 바꿀 수 있는가",                                                                                                                                               note:"치맥/와인 등 캐주얼한 분위기", location:"포유포레",               locationUrl:"https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88",                           type:"keynote" },
      ],
    },
    {
      label: "Day 2",
      date:  "7월 10일 (금)",
      items: [
        { time:"08:00 – 09:00", title:"조식 및 산책",    desc:"자유로운 아침 식사",               accTabId:"breakfast",                 note:"자율",      location:"포유포레", locationUrl:"https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88", type:"break" },
        { time:"09:00 – 10:30", title:"개인정비",         desc:"개인정비 및 퇴실 준비",            note:"",          location:"",         locationUrl:"",                                                                     type:"break" },
        { time:"10:30 – 11:00", title:"퇴실",             desc:"",                                  note:"",          location:"포유포레", locationUrl:"https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88", type:"break" },
        { time:"11:00 – 11:30", title:"이동",             desc:"포유포레 → 칠오75(닭갈비 + 막국수)", note:"버스",      location:"",         locationUrl:"",                                                                          type:"move" },
        { time:"11:30 – 12:30", title:"점심 식사",        desc:"닭갈비 or 막국수",                   activityId:"lunch-day2",   note:"",          location:"칠오닭갈비 물의정원점",   locationUrl:"https://map.naver.com/p/entry/place/1834204211?c=15.00,0,0,0,dh&placePath=%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202607021357%26locale%3Dko%26svcName%3Dmap_pcv5", type:"break" },
        { time:"12:30 – 13:30", title:"관광",             desc:"두물머리 산책 및 단체사진 촬영",     activityId:"duumulmeori",  note:"카페 협조 필요", location:"두물머리", locationUrl:"https://map.naver.com/v5/search/%EB%91%90%EB%AC%BC%EB%A8%B8%EB%A6%AC", type:"activity" },
        { time:"13:30 – 15:00", title:"이동",             desc:"두물머리 → 생각공장 당산",         note:"버스",      location:"",         locationUrl:"",                                                                     type:"move" },
        { time:"15:00",         title:"해산",             desc:"",                                  note:"",          location:"생각공장 당산", locationUrl:"https://map.naver.com/v5/search/%EC%83%9D%EA%B0%81%EA%B3%B5%EC%9E%A5%20%EB%8B%B9%EC%82%B0", type:"session" },
      ],
    },
  ],

  // ── 사전안내 ──────────────────────────────────────────────
  briefing: {
    meetingPoint: {
      location:    '생각공장 당산 미팅룸 E',
      locationUrl: 'https://map.naver.com/v5/search/%EC%83%9D%EA%B0%81%EA%B3%B5%EC%9E%A5%20%EB%8B%B9%EC%82%B0',
      date:        '2026년 7월 9일(목)',
      time:        '09:00',
      note:        '버스 출발 시간(09:30)에 맞춰 09:00까지 도착해 주세요.',
    },
    attire: '편한 캐주얼 복장 권장 (카트 · 야외 산책 등 액티비티 있음)',
    checklist: [
      {
        emoji: '👕',
        title: '의류',
        desc:  '외출용과 실내용을 편한 복장으로 챙겨주세요. 카트체험, 야외 산책 등이 예정되어 있어요.',
        sub:   { type: 'optional', emoji: '🩱', badge: '선택', text: '수영복 — 숙소 안에 풀장이 준비되어 있어요. 필수지참은 아니에요. 선택적으로 챙겨주세요.' },
      },
      {
        emoji: '🧴',
        title: '개인 위생도구',
        desc:  '기본적으로 샤워용품은 준비되어 있어요. 개인적으로 사용하는 게 있다면 챙겨주세요.',
      },
      {
        emoji: '🕶️',
        title: '선글라스 · 선크림 · 양산',
        desc:  '야외 활동 시 자외선이 매우 강해요.',
        sub:   { type: 'caution', emoji: '⚠️', badge: '주의', text: '카트 탑승 시 선글라스를 착용하면 돌이 튀어 기스가 날 수 있으니 주의하세요.' },
      },
      {
        emoji: '⛳',
        title: '골프채',
        desc:  '스크린골프장을 이용하실 예정이면 지참해주세요. 하우스 채도 준비되어 있지만 종류가 많지 않아요.',
        sub:   { type: 'info', emoji: '🚗', badge: '안내', text: '가져오시면 법인차량으로 별도로 옮겨드려요.' },
      },
    ],
    notes: [
      '버스로 함께 이동해요. 늦으면 출발이 지연될 수 있으니 시간을 잘 지켜주세요.',
      '추가로 사전에 문의가 필요한 경우 #2026년-leadership-workshop 채널로 문의해주세요.',
    ],
  },

  // ── 즐길거리 & 식사 ──────────────────────────────────────
  activities: [
    {
      id:          'kart',
      day:         0,
      category:    '액티비티',
      title:       '카트 + 사격',
      location:    '가평레저카트장',
      locationUrl: 'https://map.naver.com/v5/search/%EA%B0%80%ED%8F%89%EB%A0%88%EC%A0%80%EC%B9%B4%ED%8A%B8%EC%9E%A5',
      time:        '11:00 – 12:00',
      desc:        '카트 1인승 + 사격. 가평의 자연 속에서 즐기는 스피드와 집중력의 조합!',
      note:        '',
      image:       'kart.jpg',
      icon:        'ti-steering-wheel',
    },
    {
      id:          'lunch-day1',
      day:         0,
      category:    '식사',
      title:       '점심 — BBQ와 수제맥주',
      location:    '크레머리',
      locationUrl: 'https://map.naver.com/v5/search/%ED%81%AC%EB%A0%88%EB%A8%B8%EB%A6%AC%20%EA%B0%80%ED%8F%89',
      time:        '12:00 – 13:30',
      desc:        '가평 명소 크레머리에서 즐기는 BBQ와 수제맥주. 풍성한 식사로 오후 일정을 준비해요.',
      note:        '',
      image:       'lunch-day1.JPEG',
      icon:        'ti-grill',
    },
    {
      id:          'dinner',
      day:         0,
      category:    '식사',
      title:       '만찬 및 네트워킹',
      location:    '포유포레 공용주방',
      locationUrl: 'https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88',
      time:        '18:10 – 20:30',
      desc:        '맛있는 저녁을 먹으며 편안한 분위기로 유대감을 형성하는 시간. 치맥·와인과 함께 편하게.',
      note:        '',
      image:       'dinner.JPEG',
      icon:        'ti-glass-full',
    },
    {
      id:          'duumulmeori',
      day:         1,
      category:    '액티비티',
      title:       '두물머리 관광',
      location:    '두물머리',
      locationUrl: 'https://map.naver.com/v5/search/%EB%91%90%EB%AC%BC%EB%A8%B8%EB%A6%AC',
      time:        '12:30 – 13:30',
      desc:        '북한강과 남한강이 만나는 두물머리. 산책과 단체사진으로 워크숍의 마지막 추억을 남겨요.',
      note:        '',
      image:       'duumulmeori.JPEG',
      icon:        'ti-camera',
    },
    {
      id:          'lunch-day2',
      day:         1,
      category:    '식사',
      title:       '점심 — 닭갈비 or 막국수',
      location:    '칠오닭갈비 물의정원점',
      locationUrl: 'https://map.naver.com/p/entry/place/1834204211?c=15.00,0,0,0,dh&placePath=%2Fhome%3Ffrom%3Dmap%26fromPanelNum%3D1%26additionalHeight%3D76%26timestamp%3D202607021357%26locale%3Dko%26svcName%3Dmap_pcv5',
      time:        '11:30 – 12:30',
      desc:        '가평의 대표 메뉴 닭갈비 또는 막국수로 즐기는 마지막 식사. 워크숍의 여운을 나누며 마무리해요.',
      note:        '',
      image:       'lunch-day2.png',
      icon:        'ti-chef-hat',
    },
  ],

  // ── 검색 안내 정보 ─────────────────────────────────────────
  tips: [
    { keywords:["흡연","담배","흡연구역"],    title:"흡연 안내",    desc:"① 2층 야외정원 건물 뒤편에 있어요  ② 외부현관에서 바로 들어가거나, 주차장에 있는 문을 통해 갈 수 있어요. 모두를 위해 정해진 장소에서만 흡연 부탁드려요." },
    { keywords:["주차","차량","자동차"],      title:"주차 안내",    desc:"버스 운행으로 개인 차량은 자제 부탁드립니다." },
    { keywords:["와이파이","wifi","인터넷"],  title:"Wi-Fi 안내",   desc:"현장 도착 후 안내드립니다. 숙소 탭 → 와이파이 메뉴에서 확인하세요." },
    { keywords:["버스","교통"],               title:"교통 안내",    desc:"생각공장 당산(미팅룸 E)에서 버스로 출발합니다. 09:00까지 집합해 주세요." },
    { keywords:["객실","룸","방","숙박","체크인","퇴실"], title:"숙박 안내", desc:"포유포레 체크인 14:00–14:30, 퇴실 Day 2 10:30–11:00 입니다." },
  ],

  videos: [],
};
