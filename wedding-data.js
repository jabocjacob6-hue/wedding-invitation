const WEDDING_DATA = {
  // 🎵 តន្ត្រីពី YouTube (គ្https://youtu.be/d6-xy0WePus?si=1qwVyZ6csBnlOFYx)
  // ឧទាហរណ៍: https://www.youtube.com/watch?v=dQw4w9WgXcQ -> ID គឺ "dQw4w9WgXcQ"
  youtubeVideoId: "dQw4w9WgXcQ", // ជំនួសដោយ ID ចម្រៀងខ្មែរដែលអ្នកស្រឡាញ់
  audioFallbackUrl: "", // ឬអាចដាក់ link file .mp3 ផ្ទាល់

  // ព័ត៌មានកូនកំលោះ និង កូនក្រមុំ
  groom: {
    nameKh: "ផៃ រស្មី",
    nameEn: "Phay Raksmey",
    father: "លោក ផៃ សួន",
    mother: "អ្នកស្រី ម៉ាត់ ចាន់ណារ៉ា"
  },
  bride: {
    nameKh: "មាស ភក្តី",
    nameEn: "Meas Pheakdey",
    father: "លោក ហែម សាវឿន",
    mother: "អ្នកស្រី សៅ រ៉ាឌី"
  },

  // កាលបរិច្ឆេទ
  weddingDate: "2026-11-15T07:00:00", // ឆ្នាំ-ខែ-ថ្ងៃ ម៉ោង (សម្រាប់ Countdown)
  dateKh: {
    dayOfWeek: "ថ្ងៃ អាទិត្យ",
    day: "១៥",
    month: "វិច្ឆិកា",
    year: "២០២៦",
    lunarDate: "ត្រូវនឹងថ្ងៃ អាទិត្យ ២កើត ខែកត្តិក ឆ្នាំមមី អដ្ឋស័ក ព.ស.២៥៧០"
  },

  // ទីតាំងពិធី
  location: {
    venueKh: "គេហដ្ឋានខាងស្រី",
    addressKh: "ភូមិព្រៃគុយលិច១២១ សង្កាត់ព្រៃគុយ ក្រុងតាខ្មៅ ខេត្តកណ្តាល",
    timeKh: "វេលាម៉ោង ៦:០០ ព្រឹក",
    googleMapsUrl: "https://maps.google.com/?q=11.4789,104.9458",
    phones: ["096 7 717 278", "070 895 623"]
  },

  // កម្មវិធីមង្គលការ (Schedule)
  schedule: [
    {
      dayTitle: "កម្មវិធីទី១៖ ថ្ងៃសៅរ៍ ទី១៤ ខែវិច្ឆិកា ឆ្នាំ២០២៦",
      events: [
        { time: "ម៉ោង ០៣:០០ រសៀល", title: "ពិធីសែនក្រុងពាលី" },
        { time: "ម៉ោង ០៤:០០ ល្ងាច", title: "ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត" },
        { time: "ម៉ោង ០៥:០០ ល្ងាច", title: "អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារពេលល្ងាច" }
      ]
    },
    {
      dayTitle: "កម្មវិធីទី២៖ ថ្ងៃអាទិត្យ ទី១៥ ខែវិច្ឆិកា ឆ្នាំ២០២៦",
      events: [
        { time: "ម៉ោង ០៦:៣០ ព្រឹក", title: "ជួបជុំភ្ញៀវកិត្តិយសដើម្បីរៀបចំក្បួនជំនូន" },
        { time: "ម៉ោង ០៧:០០ ព្រឹក", title: "ពិធីហែក្បួនជំនូន (កំណត់វេលាចូលផ្ទះ)" },
        { time: "ម៉ោង ០៨:៣០ ព្រឹក", title: "ពិធីសំពះផ្ទឹម និងចងដៃកូនប្រុស-កូនស្រី" },
        { time: "ម៉ោង ០៥:០០ ល្ងាច", title: "អញ្ជើញភ្ញៀវកិត្តិយសពិសាភោជនាហារ" }
      ]
    }
  ],

  // រូបថត Pre-wedding
  photos: {
    hero: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    couplePortrait: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80"
    ]
  },

  // QR Code សម្រាប់ចងដៃ (KHQR / ABA)
  qrGift: {
    name: "MEAS PHEAKDEY",
    accountNumber: "000 123 456",
    khqrImage: "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=KHQR_SAMPLE"
  }
};
