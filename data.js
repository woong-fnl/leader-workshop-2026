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
  // title    : 직책 / name: 성명 / division: 본부 / team: 팀
  attendees: [
    { name: "이상훈", title: "CEO",          division: "대표이사",              team: "-" },
    { name: "한송희", title: "CEO",          division: "대표이사",              team: "-" },
    { name: "정이한", title: "Group Leader", division: "Operation Group",      team: "Operation Group" },
    { name: "이동주", title: "Center Leader",division: "Operation Group",      team: "Logistics Team" },
    { name: "유아진", title: "Team Leader",  division: "KR Biz Group",         team: "KR Marketing Team" },
    { name: "이종국", title: "Group Leader", division: "Global Sales Group",   team: "Global Sales Group" },
    { name: "마준성", title: "Team Leader",  division: "Global Sales Group",   team: "SEA Team" },
    { name: "김준범", title: "Team Leader",  division: "Global Marketing Group",team: "JP Team" },
    { name: "손은호", title: "Team Leader",  division: "CEO Direct(2400)",     team: "FA Team" },
    { name: "김성수", title: "Team Leader",  division: "CEO Direct(2400)",     team: "HR&GA Team" },
    { name: "강수지", title: "Team Leader",  division: "CEO Direct(2400)",     team: "CEO Staff" },
    { name: "오주은", title: "Team Leader",  division: "CEO Direct(2500)",     team: "Design Team" },
    { name: "이성필", title: "Team Leader",  division: "CEO Direct(2500)",     team: "Redence Marketing Team" },
    { name: "김수인", title: "Team Leader",  division: "CEO Direct(2500)",     team: "Influencer Team" },
    { name: "김재환", title: "Part Leader",  division: "CEO Direct(2500)",     team: "F&B Part" },
    { name: "송유진", title: "Part Leader",  division: "CEO Direct(2500)",     team: "Beauty Part" },
    { name: "황대로", title: "Staff",        division: "CEO Direct(2400)",     team: "HR&GA Team" },
    { name: "조원웅", title: "Staff",        division: "CEO Direct(2400)",     team: "HR&GA Team" },
    { name: "김지민", title: "Staff",        division: "CEO Direct(2400)",     team: "HR&GA Team" },
  ],

  // ── 숙소 정보 (포유포레) ──────────────────────────────────
  accommodation: {
    name:        "포유포레",
    locationUrl: "https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88",

    // 와이파이 (현장 확인 후 입력)
    // ssid: 네트워크 이름 / password: 비밀번호 / note: 추가 안내
    wifi: [
      { ssid: "입력 예정", password: "입력 예정", note: "현장 도착 후 안내드립니다." },
    ],

    // 방배정 (입력 예정)
    // { room: '201호', occupants: ['이름', '이름'] } 형식으로 추가
    rooms: [
      // { room: "201호", occupants: ["이상훈", "정이한"] },
    ],

    // 층별 시설 안내
    // image: 사진 파일명 (images/facilities/ 폴더에 넣어두세요)
    // icon:  Tabler 아이콘 이름 (사진 없을 때 표시)
    floors: [
      {
        label: "1층",
        note:  "주차장에서 문이 연결되어 있어요.",
        spaces: [
          { name: "대형세미나실", desc: "실제 세션이 진행되는 장소입니다.",                                                      image: "", icon: "ti-presentation" },
          { name: "멀티룸",       desc: "대형스크린과 리클라이너소파가 있습니다. 편하게 쉬면서 이야기하는 공간으로 적당해요.", image: "", icon: "ti-device-tv" },
          { name: "사우나 & 스파",desc: "",                                                                                       image: "", icon: "ti-ripple" },
          { name: "스크린골프",   desc: "",                                                                                       image: "", icon: "ti-golf" },
        ],
      },
      {
        label: "2층",
        note:  "",
        spaces: [
          { name: "공용주방",           desc: "첫째 날 저녁식사 장소에요.",                                                        image: "", icon: "ti-chef-hat" },
          { name: "야외 정원",          desc: "2층에서 야외 정원으로 나갈 수 있어요. 정원 뒤편에 흡연장소도 마련되어 있습니다.", image: "", icon: "ti-plant-2" },
          { name: "객실 201호 / 202호", desc: "",                                                                                   image: "", icon: "ti-bed" },
        ],
      },
      {
        label: "3층",
        note:  "",
        spaces: [
          { name: "객실 301호 · 302호 · 303호 · 304호 · 305호", desc: "", image: "", icon: "ti-bed" },
        ],
      },
      {
        label: "4층",
        note:  "",
        spaces: [
          { name: "객실 401호 / 402호", desc: "", image: "", icon: "ti-bed" },
        ],
      },
    ],

    // 흡연구역
    smokingAreas: [
      "2층 야외정원 건물 뒤편",
      "외부현관을 들어가면 바로 있어요.",
    ],

    // Day 2 조식 안내 (입력 예정)
    breakfast: {
      time:     "08:00 – 09:00",
      location: "",   // 예) "1층 레스토랑"
      menu:     "",   // 예) "뷔페식"
      note:     "",   // 추가 안내
    },

    // 근처 카페 (입력 예정)
    // { name, address, hours, note, locationUrl } 형식으로 추가
    cafes: [],
  },

  // ── 일정 ──────────────────────────────────────────────────
  days: [
    {
      label: "Day 1",
      date:  "7월 9일 (목)",
      items: [
        { time:"09:00 – 09:30", title:"집합",                         desc:"",                                                                             note:"",              location:"생각공장 당산 미팅룸 E", locationUrl:"https://map.naver.com/v5/search/%EC%83%9D%EA%B0%81%EA%B3%B5%EC%9E%A5%20%EB%8B%B9%EC%82%B0", type:"session" },
        { time:"09:30 – 11:00", title:"이동",                         desc:"생각공장 당산 → 가평레저카트장",                                               note:"버스 대절",     location:"",                       locationUrl:"",                                                                                            type:"move" },
        { time:"11:00 – 12:00", title:"액티비티 (카트 + 사격)",       desc:"실속패키지 1인 (카트 1인승 + 사격)",                                           note:"",              activityId:"kart",        location:"가평레저카트장",          locationUrl:"https://map.naver.com/v5/search/%EA%B0%80%ED%8F%89%EB%A0%88%EC%A0%80%EC%B9%B4%ED%8A%B8%EC%9E%A5", type:"activity" },
        { time:"12:00 – 13:30", title:"점심 식사",                    desc:"프라임BBQ",                                                                    activityId:"lunch-day1",                                                                    note:"",              location:"크레머리",                locationUrl:"https://map.naver.com/v5/search/%ED%81%AC%EB%A0%88%EB%A8%B8%EB%A6%AC%20%EA%B0%80%ED%8F%89",       type:"break" },
        { time:"13:30 – 14:00", title:"이동",                         desc:"크레머리 → 포유포레",                                                          note:"버스 대절",     location:"",                       locationUrl:"",                                                                                            type:"move" },
        { time:"14:00 – 14:30", title:"도착 및 룸 배정",              desc:"워크숍 장소 도착 및 오리엔테이션",                                             note:"",              location:"포유포레",                locationUrl:"https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88",                           type:"session" },
        { time:"14:30 – 15:00", title:"오프닝 (워크숍 목적 설명)",    desc:"이번 워크숍은 솔직한 소통을 통해 '해결'과 '변화'를 위한 자리",               note:"대표자 기조 발언", location:"포유포레",              locationUrl:"https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88",                           type:"keynote" },
        { time:"15:00 – 16:00", title:"Session 1 — 회사 방향성 및 인사체계 Sync", desc:"① 사업계획 수립: 일정 및 목적 공유\n② 인사체계 안내: 직무, Job Level, 직책, 평가, 보상 기준 등\n③ 타운홀 안내: 리더들이 먼저 인지해야 할 타운홀 미팅 가이드", note:"성수 발언 + Q&A", location:"포유포레", locationUrl:"https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88", type:"keynote" },
        { time:"16:00 – 17:00", title:"휴식 시간",                    desc:"",                                                                             note:"",              location:"",                       locationUrl:"",                                                                                            type:"break" },
        { time:"17:00 – 18:30", title:"Session 2 — 에프앤엘의 문제 마주하기", desc:"① 문화적 문제: 회사가 겪고 있는 소통/협업의 병목 구간 공유\n② 개인의 고충: 팀을 운영하며 겪는 리더들의 현실적인 어려움\n→ 넋두리가 아니라, 함께 해결해야 할 공식 안건으로 인지", note:"대표는 조력자의 역할로 인식", location:"포유포레", locationUrl:"https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88", type:"keynote" },
        { time:"18:30 – 20:30", title:"만찬 및 네트워킹",             desc:"맛있는 저녁을 먹으며 편안한 분위기로 유대감 형성",                           note:"",              activityId:"dinner",      location:"포유포레",                locationUrl:"https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88",                           type:"networking" },
        { time:"20:30 – 22:00", title:"Session 3 — 안도감 → 영향력", desc:"나만 힘든 게 아니고, 모두가 고충이 있구나… 감정 터치\n그렇다면 리더로서 에프앤엘을 어떻게 바꿀 수 있는가", note:"치맥/와인 등 캐주얼한 분위기", location:"포유포레", locationUrl:"https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88", type:"keynote" },
      ],
    },
    {
      label: "Day 2",
      date:  "7월 10일 (금)",
      items: [
        { time:"08:00 – 09:00", title:"조식 및 산책",    desc:"자유로운 아침 식사",               activityId:"breakfast",               note:"자율",      location:"포유포레", locationUrl:"https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88", type:"break" },
        { time:"09:00 – 10:30", title:"개인정비",         desc:"개인정비 및 퇴실 준비",            note:"",          location:"",         locationUrl:"",                                                                     type:"break" },
        { time:"10:30 – 11:00", title:"퇴실",             desc:"",                                  note:"",          location:"포유포레", locationUrl:"https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88", type:"break" },
        { time:"11:00 – 11:30", title:"이동",             desc:"포유포레 → 두물머리",              note:"버스 대절", location:"",         locationUrl:"",                                                                     type:"move" },
        { time:"11:30 – 12:30", title:"관광",             desc:"두물머리 산책 및 단체사진 촬영",   activityId:"duumulmeori",   note:"",          location:"두물머리", locationUrl:"https://map.naver.com/v5/search/%EB%91%90%EB%AC%BC%EB%A8%B8%EB%A6%AC",  type:"activity" },
        { time:"12:30 – 13:30", title:"점심 식사",        desc:"닭갈비 or 막국수",                 activityId:"lunch-day2",                 note:"",          location:"두물머리닭갈비", locationUrl:"https://map.naver.com/v5/search/%EB%91%90%EB%AC%BC%EB%A8%B8%EB%A6%AC%EB%8B%AD%EA%B0%88%EB%B9%84", type:"break" },
        { time:"13:30 – 15:00", title:"이동",             desc:"두물머리 → 생각공장 당산",         note:"버스 대절", location:"",         locationUrl:"",                                                                     type:"move" },
        { time:"15:00",         title:"해산",             desc:"",                                  note:"",          location:"생각공장 당산", locationUrl:"https://map.naver.com/v5/search/%EC%83%9D%EA%B0%81%EA%B3%B5%EC%9E%A5%20%EB%8B%B9%EC%82%B0", type:"session" },
      ],
    },
  ],

  // ── 즐길거리 & 식사 ──────────────────────────────────────
  // day: 0=Day1, 1=Day2 / category: '액티비티' | '식사'
  // image: 파일명 (images/activities/ 폴더) / icon: Tabler 아이콘
  activities: [
    {
      id:          'kart',
      day:         0,
      category:    '액티비티',
      title:       '카트 + 사격',
      location:    '가평레저카트장',
      locationUrl: 'https://map.naver.com/v5/search/%EA%B0%80%ED%8F%89%EB%A0%88%EC%A0%80%EC%B9%B4%ED%8A%B8%EC%9E%A5',
      time:        '11:00 – 12:00',
      desc:        '카트 1인승 + 사격 실속패키지. 가평의 자연 속에서 즐기는 스피드와 집중력의 조합!',
      note:        '참가비 포함',
      image:       '',
      icon:        'ti-steering-wheel',
    },
    {
      id:          'lunch-day1',
      day:         0,
      category:    '식사',
      title:       '점심 — 프라임BBQ',
      location:    '크레머리',
      locationUrl: 'https://map.naver.com/v5/search/%ED%81%AC%EB%A0%88%EB%A8%B8%EB%A6%AC%20%EA%B0%80%ED%8F%89',
      time:        '12:00 – 13:30',
      desc:        '가평 명소 크레머리에서 즐기는 프라임BBQ 점심. 풍성한 식사로 오후 일정을 준비해요.',
      note:        '',
      image:       '',
      icon:        'ti-grill',
    },
    {
      id:          'dinner',
      day:         0,
      category:    '식사',
      title:       '만찬 및 네트워킹',
      location:    '포유포레 공용주방',
      locationUrl: 'https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88',
      time:        '18:30 – 20:30',
      desc:        '맛있는 저녁을 먹으며 편안한 분위기로 유대감을 형성하는 시간. 치맥·와인과 함께 편하게.',
      note:        '',
      image:       '',
      icon:        'ti-glass-full',
    },
    {
      id:          'breakfast',
      day:         1,
      category:    '식사',
      title:       'Day 2 조식 & 산책',
      location:    '포유포레',
      locationUrl: 'https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88',
      time:        '08:00 – 09:00',
      desc:        '자유로운 아침 식사 후 산책으로 상쾌하게 시작하는 Day 2.',
      note:        '자율 참석',
      image:       '',
      icon:        'ti-coffee',
    },
    {
      id:          'duumulmeori',
      day:         1,
      category:    '액티비티',
      title:       '두물머리 관광',
      location:    '두물머리',
      locationUrl: 'https://map.naver.com/v5/search/%EB%91%90%EB%AC%BC%EB%A8%B8%EB%A6%AC',
      time:        '11:30 – 12:30',
      desc:        '북한강과 남한강이 만나는 두물머리. 산책과 단체사진으로 워크숍의 마지막 추억을 남겨요.',
      note:        '',
      image:       '',
      icon:        'ti-camera',
    },
    {
      id:          'lunch-day2',
      day:         1,
      category:    '식사',
      title:       '점심 — 닭갈비 or 막국수',
      location:    '두물머리닭갈비',
      locationUrl: 'https://map.naver.com/v5/search/%EB%91%90%EB%AC%BC%EB%A8%B8%EB%A6%AC%EB%8B%AD%EA%B0%88%EB%B9%84',
      time:        '12:30 – 13:30',
      desc:        '가평의 대표 메뉴 닭갈비 또는 막국수로 즐기는 마지막 식사. 워크숍의 여운을 나누며 마무리해요.',
      note:        '',
      image:       '',
      icon:        'ti-chef-hat',
    },
  ],

  // ── 검색 안내 정보 ─────────────────────────────────────────
  tips: [
    { keywords:["흡연","담배","흡연구역"],    title:"흡연 안내",    desc:"① 2층 야외정원 건물 뒤편  ② 외부현관을 들어가면 바로 있어요. 모두를 위해 정해진 장소에서만 흡연 부탁드려요." },
    { keywords:["주차","차량","자동차"],      title:"주차 안내",    desc:"버스 대절 운행으로 개인 차량은 자제 부탁드립니다." },
    { keywords:["와이파이","wifi","인터넷"],  title:"Wi-Fi 안내",   desc:"현장 도착 후 안내드립니다. 숙소 탭 → 와이파이 메뉴에서 확인하세요." },
    { keywords:["버스","대절","교통"],        title:"교통 안내",    desc:"생각공장 당산(미팅룸 E)에서 버스 대절로 출발합니다. 09:00까지 집합해 주세요." },
    { keywords:["객실","룸","방","숙박","체크인","퇴실"], title:"숙박 안내", desc:"포유포레 체크인 14:00–14:30, 퇴실 Day 2 10:30–11:00 입니다." },
  ],

  videos: [],
};
