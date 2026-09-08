import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'Apa saja cabang lomba yang tersedia di FAMOUS VI?',
    answer: 'FAMOUS VI memiliki 8 cabang lomba: Futsal, LKBB (Lomba Ketangkasan Baris Berbaris), Archery Putri, Speech, Story Telling, MHQ (Musabaqah Hifdzil Qur\'an), Poster Digital, dan Khitobah.',
  },
  {
    id: 2,
    question: 'Siapa yang dapat mengikuti FAMOUS VI?',
    answer: 'FAMOUS VI terbuka untuk pelajar SMP/MTs sederajat Se-Pulau Jawa. Peserta harus merupakan siswa aktif di sekolah masing-masing.',
  },
  {
    id: 3,
    question: 'Bagaimana cara mendaftar FAMOUS VI?',
    answer: 'Pendaftaran dilakukan secara online melalui link bit.ly yang tersedia, atau bisa menghubungi Contact Person: Diza (081343059590), Hendra (081400842090), atau Ustadz Ahad (08212134290).',
  },
  {
    id: 4,
    question: 'Kapan batas waktu pendaftaran?',
    answer: 'Open registration FAMOUS VI dibuka mulai 02 September hingga 10 Oktober 2026. Segera daftarkan diri sebelum batas waktu!',
  },
  {
    id: 5,
    question: 'Apa hadiah yang bisa didapatkan?',
    answer: 'Pemenang setiap cabang lomba berhak mendapatkan trofi, sertifikat, dan uang tunai senilai puluhan juta rupiah. Detail hadiah akan diumumkan melalui media sosial resmi FAMOUS VI.',
  },
  {
    id: 6,
    question: 'Di mana lokasi penyelenggaraan FAMOUS VI?',
    answer: 'FAMOUS VI diselenggarakan di SMAIT Al-Fityan Boarding School Bogor. Detail lokasi lengkap akan diberikan saat Technical Meeting.',
  },
  {
    id: 7,
    question: 'Apakah ada biaya pendaftaran?',
    answer: 'Informasi detail mengenai biaya pendaftaran dapat diperoleh dengan menghubungi Contact Person yang tersedia atau melalui media sosial resmi FAMOUS VI.',
  },
  {
    id: 8,
    question: 'Bagaimana jika ada pertanyaan lebih lanjut?',
    answer: 'Hubungi panitia FAMOUS VI melalui Contact Person: Diza (081343059590), Hendra (081400842090), atau Ustadz Ahad (08212134290). Tim kami siap membantu!',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #03020c 0%, #040814 50%, #020617 100%)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-4 cloud-badge-purple poster-shadow-purple"
            style={{ color: '#7e22ce' }}
          >
            ✦ FAQ
          </span>
          <h2 className="poster-font text-3xl sm:text-5xl font-black text-white">
            Pertanyaan yang Sering{' '}
            <span className="text-stroke-white text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)' }}>
              Diajukan
            </span>
          </h2>
          <p className="mt-3 text-base font-medium" style={{ color: 'rgba(200,225,255,0.7)' }}>
            Temukan jawaban atas pertanyaan umum seputar FAMOUS 6.0 2026
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl overflow-hidden transition-all duration-200"
                style={{
                  border: `1.5px solid ${isOpen ? '#38bdf8' : 'rgba(255,255,255,0.12)'}`,
                  backgroundColor: isOpen ? 'rgba(56,189,248,0.12)' : 'rgba(255,255,255,0.05)',
                  boxShadow: isOpen ? '0 8px 30px rgba(56,189,248,0.2)' : 'none',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
                      style={{
                        backgroundColor: isOpen ? '#38bdf8' : 'rgba(255,255,255,0.15)',
                        color: isOpen ? '#0369a1' : 'white',
                      }}
                    >
                      {faq.id}
                    </span>
                    <span className="text-sm font-bold text-white">
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{
                      backgroundColor: isOpen ? '#38bdf8' : 'rgba(255,255,255,0.1)',
                      color: isOpen ? '#0369a1' : 'white',
                    }}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  className={`faq-content ${isOpen ? 'open' : ''}`}
                  role="region"
                >
                  <div className="px-5 pb-5">
                    <div className="h-px mb-4" style={{ backgroundColor: isOpen ? 'rgba(56,189,248,0.3)' : 'rgba(255,255,255,0.1)' }} />
                    <p className="text-sm leading-relaxed pl-10 font-medium" style={{ color: 'rgba(224,242,254,0.85)' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="mt-12 rounded-2xl p-8 text-center"
          style={{ background: 'linear-gradient(135deg, #071220 0%, #0a2a50 100%)' }}
        >
          <h3 className="text-lg font-bold text-white mb-2">Masih punya pertanyaan?</h3>
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Hubungi panitia FAMOUS VI dan kami siap membantu!
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:081343059590"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, var(--color-orange) 0%, var(--color-orange-dark) 100%)', color: 'white' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
            >
              📞 Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
