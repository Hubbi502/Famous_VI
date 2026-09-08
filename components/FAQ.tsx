import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'Apa saja kategori lomba yang tersedia?',
    answer: 'Kategori lomba meliputi Web Design (SMA/SMK & Perguruan Tinggi), Lomba Ilustrasi Digital, Cerdas Cermat Akuntansi, dan Cerdas Cermat Manajemen.',
  },
  {
    id: 2,
    question: 'Siapa yang dapat mengikuti perlombaan ini?',
    answer: 'Lomba ini terbuka untuk pelajar SMA/SMK dan mahasiswa aktif dari seluruh Indonesia yang memenuhi syarat pendaftaran.',
  },
  {
    id: 3,
    question: 'Bagaimana cara mendaftar lomba?',
    answer: 'Pendaftaran dapat dilakukan secara online melalui website resmi SITEFEST atau dengan mengisi formulir pendaftaran yang tersedia.',
  },
  {
    id: 4,
    question: 'Apakah ada biaya pendaftaran?',
    answer: 'Biaya pendaftaran bervariasi untuk setiap kategori lomba. Detail biaya akan diinformasikan melalui halaman kompetisi masing-masing.',
  },
  {
    id: 5,
    question: 'Apa hadiah yang bisa didapatkan?',
    answer: 'Total hadiah mencapai Rp 100.000.000+ yang akan dibagikan kepada pemenang dari setiap kategori lomba.',
  },
  {
    id: 6,
    question: 'Bagaimana sistem penilaian lomba?',
    answer: 'Penilaian dilakukan oleh juri profesional berdasarkan kriteria yang telah ditetapkan untuk masing-masing kategori kompetisi.',
  },
  {
    id: 7,
    question: 'Kapan pengumuman pemenang akan dilakukan?',
    answer: 'Pengumuman pemenang akan dilakukan pada acara Grand Final dan Awarding yang dijadwalkan pada 7 Juni 2026.',
  },
  {
    id: 8,
    question: 'Bagaimana jika ada pertanyaan lebih lanjut?',
    answer: 'Silakan hubungi panitia SITEFEST melalui email atau media sosial resmi kami. Tim kami siap membantu menjawab pertanyaan Anda.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 lg:py-28" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: 'var(--color-cyan)' }}
          >
            <span className="w-5 h-0.5 rounded" style={{ backgroundColor: 'var(--color-cyan)' }} />
            FAQ
            <span className="w-5 h-0.5 rounded" style={{ backgroundColor: 'var(--color-cyan)' }} />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--color-navy)' }}>
            Pertanyaan yang Sering{' '}
            <span style={{ color: 'var(--color-cyan)' }}>Diajukan</span>
          </h2>
          <p className="mt-3 text-base" style={{ color: 'var(--color-muted)' }}>
            Temukan jawaban atas pertanyaan umum seputar SITEFEST 2026
          </p>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-xl overflow-hidden transition-all duration-200"
                style={{
                  border: `1.5px solid ${isOpen ? 'var(--color-cyan)' : 'var(--color-border)'}`,
                  backgroundColor: isOpen ? 'rgba(32,199,215,0.03)' : 'var(--color-white)',
                  boxShadow: isOpen ? '0 4px 20px rgba(32,199,215,0.08)' : 'none',
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
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        backgroundColor: isOpen ? 'var(--color-cyan)' : 'rgba(6,62,112,0.08)',
                        color: isOpen ? 'var(--color-navy)' : 'var(--color-blue)',
                      }}
                    >
                      {faq.id}
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: isOpen ? 'var(--color-navy)' : 'var(--color-text)' }}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{
                      backgroundColor: isOpen ? 'var(--color-cyan)' : 'rgba(6,62,112,0.08)',
                      color: isOpen ? 'var(--color-navy)' : 'var(--color-blue)',
                    }}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  className={`faq-content ${isOpen ? 'open' : ''}`}
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                >
                  <div className="px-5 pb-5">
                    <div
                      className="h-px mb-4"
                      style={{ backgroundColor: isOpen ? 'rgba(32,199,215,0.2)' : 'var(--color-border)' }}
                    />
                    <p className="text-sm leading-relaxed pl-9" style={{ color: 'var(--color-muted)' }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA at bottom */}
        <div
          className="mt-12 rounded-2xl p-8 text-center"
          style={{ backgroundColor: 'var(--color-navy)' }}
        >
          <h3 className="text-lg font-bold text-white mb-2">Masih punya pertanyaan?</h3>
          <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Hubungi tim kami dan kami akan dengan senang hati membantu Anda
          </p>
          <a
            href="mailto:marketing@primakara.ac.id"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
            style={{ backgroundColor: 'var(--color-cyan)', color: 'var(--color-navy)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#18b0bf')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-cyan)')}
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}
