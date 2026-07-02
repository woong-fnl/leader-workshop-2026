// ============================================================
//  data.js — 이 파일만 수정하면 행사 내용이 전체 반영됩니다.
// ============================================================

const EVENT = {

  // ── 기본 정보 ──────────────────────────────────────────────
  title:    "2026 에프앤엘 리더십 워크숍",
  subtitle: "고민은 나누고 비전은 맞추고, 함께 걷는 에프앤엘",
  date:     "2026년 7월 9일(목) – 10일(금)",
  time:     "Day 1  09:00 – Day 2  15:00",
  venue:    "포유포레 (경기 가평)",
  address:  "경기도 가평군 포유포레",
  audience: "전사 리더 및 팀장",

  // 상단 공지 띠 (없으면 "" 로 두세요)
  notice: "",

  // ── 검색용 안내 정보 (일정에 없는 키워드 대응) ───────────────
  // keywords : 이 검색어들이 입력됐을 때 이 항목이 노출됩니다
  // title    : 결과에 표시될 제목
  // desc     : 설명
  tips: [
    {
      keywords: ["흡연", "담배", "흡연구역", "흡연 구역"],
      title:    "흡연 안내",
      desc:     "실내 전면 금연입니다. 야외 지정 흡연 구역(포유포레 로비 앞 외부)을 이용해 주세요.",
    },
    {
      keywords: ["주차", "차량", "자동차", "주차장"],
      title:    "주차 안내",
      desc:     "버스 대절 운행으로 개인 차량은 자제 부탁드립니다.",
    },
    {
      keywords: ["와이파이", "wifi", "wi-fi", "인터넷", "와이파이 비번"],
      title:    "Wi-Fi 안내",
      desc:     "Wi-Fi 정보는 체크인 시 안내됩니다.",
    },
    {
      keywords: ["버스", "대절", "이동수단", "교통"],
      title:    "교통 안내",
      desc:     "생각공장 당산(미팅룸 E)에서 버스 대절로 출발합니다. 09:00까지 집합해 주세요.",
    },
    {
      keywords: ["객실", "룸", "방", "숙박", "체크인", "체크아웃", "퇴실"],
      title:    "숙박 안내",
      desc:     "포유포레 체크인은 14:00–14:30, 체크아웃(퇴실)은 Day 2 10:30–11:00 입니다.",
    },
    {
      keywords: ["복장", "드레스코드", "복장규정"],
      title:    "복장 안내",
      desc:     "편안한 캐주얼 복장을 권장합니다. 액티비티(카트·사격) 참여 시 운동화 착용을 권장합니다.",
    },
  ],

  // ── 일정 (Day별 탭) ────────────────────────────────────────
  // type: "keynote" | "session" | "activity" | "break" | "networking" | "move"
  days: [
    {
      label: "Day 1",
      date:  "7월 9일 (목)",
      items: [
        {
          time:        "09:00 – 09:30",
          title:       "집합",
          desc:        "",
          note:        "",
          location:    "생각공장 당산 미팅룸 E",
          locationUrl: "https://map.naver.com/v5/search/%EC%83%9D%EA%B0%81%EA%B3%B5%EC%9E%A5%20%EB%8B%B9%EC%82%B0",
          type:        "session",
        },
        {
          time:        "09:30 – 11:00",
          title:       "이동",
          desc:        "생각공장 당산 → 가평레저카트장",
          note:        "버스 대절",
          location:    "",
          locationUrl: "",
          type:        "move",
        },
        {
          time:        "11:00 – 12:00",
          title:       "액티비티 (카트 + 사격)",
          desc:        "실속패키지 1인 (카트 1인승 + 사격)",
          note:        "",
          location:    "가평레저카트장",
          locationUrl: "https://map.naver.com/v5/search/%EA%B0%80%ED%8F%89%EB%A0%88%EC%A0%80%EC%B9%B4%ED%8A%B8%EC%9E%A5",
          type:        "activity",
        },
        {
          time:        "12:00 – 13:30",
          title:       "점심 식사",
          desc:        "프라임BBQ",
          note:        "",
          location:    "크레머리",
          locationUrl: "https://map.naver.com/v5/search/%ED%81%AC%EB%A0%88%EB%A8%B8%EB%A6%AC%20%EA%B0%80%ED%8F%89",
          type:        "break",
        },
        {
          time:        "13:30 – 14:00",
          title:       "이동",
          desc:        "크레머리 → 포유포레",
          note:        "버스 대절",
          location:    "",
          locationUrl: "",
          type:        "move",
        },
        {
          time:        "14:00 – 14:30",
          title:       "도착 및 룸 배정",
          desc:        "워크숍 장소 도착 및 오리엔테이션",
          note:        "",
          location:    "포유포레",
          locationUrl: "https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88",
          type:        "session",
        },
        {
          time:        "14:30 – 15:00",
          title:       "오프닝 (워크숍 목적 설명)",
          desc:        "이번 워크숍은 솔직한 소통을 통해 '해결'과 '변화'를 위한 자리",
          note:        "대표자 기조 발언",
          location:    "포유포레",
          locationUrl: "https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88",
          type:        "keynote",
        },
        {
          time:        "15:00 – 16:00",
          title:       "Session 1 — 회사 방향성 및 인사체계 Sync",
          desc:        "① 사업계획 수립: 일정 및 목적 공유\n② 인사체계 안내: 직무, Job Level, 직책, 평가, 보상 기준 등\n③ 타운홀 안내: 리더들이 먼저 인지해야 할 타운홀 미팅 가이드",
          note:        "성수 발언 + Q&A",
          location:    "포유포레",
          locationUrl: "https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88",
          type:        "keynote",
        },
        {
          time:        "16:00 – 17:00",
          title:       "휴식 시간",
          desc:        "",
          note:        "",
          location:    "",
          locationUrl: "",
          type:        "break",
        },
        {
          time:        "17:00 – 18:30",
          title:       "Session 2 — 에프앤엘의 문제 마주하기",
          desc:        "① 문화적 문제: 회사가 겪고 있는 소통/협업의 병목 구간 공유\n② 개인의 고충: 팀을 운영하며 겪는 리더들의 현실적인 어려움\n→ 넋두리가 아니라, 함께 해결해야 할 공식 안건으로 인지",
          note:        "대표는 조력자의 역할로 인식",
          location:    "포유포레",
          locationUrl: "https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88",
          type:        "keynote",
        },
        {
          time:        "18:30 – 20:30",
          title:       "만찬 및 네트워킹",
          desc:        "맛있는 저녁을 먹으며 편안한 분위기로 유대감 형성",
          note:        "",
          location:    "포유포레",
          locationUrl: "https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88",
          type:        "networking",
        },
        {
          time:        "20:30 – 22:00",
          title:       "Session 3 — 안도감 → 영향력",
          desc:        "나만 힘든 게 아니고, 모두가 고충이 있구나… 감정 터치\n그렇다면 리더로서 에프앤엘을 어떻게 바꿀 수 있는가",
          note:        "치맥/와인 등 캐주얼한 분위기",
          location:    "포유포레",
          locationUrl: "https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88",
          type:        "keynote",
        },
      ],
    },
    {
      label: "Day 2",
      date:  "7월 10일 (금)",
      items: [
        {
          time:        "08:00 – 09:00",
          title:       "조식 및 산책",
          desc:        "자유로운 아침 식사",
          note:        "자율",
          location:    "포유포레",
          locationUrl: "https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88",
          type:        "break",
        },
        {
          time:        "09:00 – 10:30",
          title:       "개인정비",
          desc:        "개인정비 및 퇴실 준비",
          note:        "",
          location:    "",
          locationUrl: "",
          type:        "break",
        },
        {
          time:        "10:30 – 11:00",
          title:       "퇴실",
          desc:        "",
          note:        "",
          location:    "포유포레",
          locationUrl: "https://map.naver.com/v5/search/%ED%8F%AC%EC%9C%A0%ED%8F%AC%EB%A0%88",
          type:        "break",
        },
        {
          time:        "11:00 – 11:30",
          title:       "이동",
          desc:        "포유포레 → 두물머리",
          note:        "버스 대절",
          location:    "",
          locationUrl: "",
          type:        "move",
        },
        {
          time:        "11:30 – 12:30",
          title:       "관광",
          desc:        "두물머리 산책 및 단체사진 촬영",
          note:        "",
          location:    "두물머리",
          locationUrl: "https://map.naver.com/v5/search/%EB%91%90%EB%AC%BC%EB%A8%B8%EB%A6%AC",
          type:        "activity",
        },
        {
          time:        "12:30 – 13:30",
          title:       "점심 식사",
          desc:        "닭갈비 or 막국수",
          note:        "",
          location:    "두물머리닭갈비",
          locationUrl: "https://map.naver.com/v5/search/%EB%91%90%EB%AC%BC%EB%A8%B8%EB%A6%AC%EB%8B%AD%EA%B0%88%EB%B9%84",
          type:        "break",
        },
        {
          time:        "13:30 – 15:00",
          title:       "이동",
          desc:        "두물머리 → 생각공장 당산",
          note:        "버스 대절",
          location:    "",
          locationUrl: "",
          type:        "move",
        },
        {
          time:        "15:00",
          title:       "해산",
          desc:        "",
          note:        "",
          location:    "생각공장 당산",
          locationUrl: "https://map.naver.com/v5/search/%EC%83%9D%EA%B0%81%EA%B3%B5%EC%9E%A5%20%EB%8B%B9%EC%82%B0",
          type:        "session",
        },
      ],
    },
  ],

  // ── 유튜브 영상 (없으면 [] 로 두세요) ─────────────────────
  videos: [],

};
