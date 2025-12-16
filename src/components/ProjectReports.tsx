import { FileText, Download, Calendar, Clock } from 'lucide-react';

const reports = [
  {
    id: 1,
    title: 'RecycloVision – AI Waste Sorting',
    description: 'A comprehensive technical report on a computer vision-based deep learning project for automatic waste material classification into plastic, paper, metal, and glass. Includes waste management problem analysis, system architecture, dataset description, CNN model design, evaluation metrics, and conclusions.',
    date: '2024-12-02',
    category: 'AI/ML • Computer Vision',
    pages: 6,
    downloadUrl: 'https://drive.google.com/file/d/1BLI-2qK11GQVc3f6pimsaEAPes1_IUcE/view?usp=drive_link',
    isAvailable: true,
  },
  {
    id: 2,
    title: '🎫 Customer Support Ticket Classifier – AI/NLP System',
    description: 'A comprehensive technical report on an NLP-based machine learning system designed to automatically classify customer support tickets into categories such as technical issues, billing inquiries, product questions, refunds, and cancellations. The project covers data cleaning, exploratory data analysis, model training, API deployment using FastAPI, and a user-friendly frontend built with Streamlit, demonstrating an end-to-end production-ready ML workflow.',
    date: '📅 Jan 2025',
    category: 'AI/ML • NLP',
    pages: 8,
    downloadUrl: 'https://drive.google.com/file/d/1-BSfPvo4BMybtv19JmkgKcPm3FmxlDhH/view?usp=drive_link',
    isAvailable: true,
  },
  {
    id: 3,
    title: 'Report Title (Coming Soon)',
    description: '',
    date: '',
    category: 'Coming Soon',
    pages: 0,
    downloadUrl: '#',
    isAvailable: false,
  },
  {
    id: 4,
    title: 'Report Title (Coming Soon)',
    description: '',
    date: '',
    category: 'Coming Soon',
    pages: 0,
    downloadUrl: '#',
    isAvailable: false,
  },
  {
    id: 5,
    title: 'Report Title (Coming Soon)',
    description: '',
    date: '',
    category: 'Coming Soon',
    pages: 0,
    downloadUrl: '#',
    isAvailable: false,
  },
  {
    id: 6,
    title: 'Report Title (Coming Soon)',
    description: '',
    date: '',
    category: 'Coming Soon',
    pages: 0,
    downloadUrl: '#',
    isAvailable: false,
  },
];

export function ProjectReports() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4 text-4xl sm:text-5xl font-bold">
            PROJECT <span className="text-[#FFC700]">REPORTS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Detailed technical reports and documentation from various projects I've worked on.
            Each report includes methodology, findings, and comprehensive analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <div
              key={report.id}
              className={`rounded-lg border p-6 transition-all ${
                report.isAvailable
                  ? 'bg-white/5 border-white/10 hover:border-[#FFC700] hover:shadow-lg hover:shadow-[#FFC700]/20'
                  : 'border-white/5 bg-white/[0.02]'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg ${
                  report.isAvailable ? 'bg-[#FFC700]/20' : 'bg-white/5'
                }`}>
                  {report.isAvailable ? (
                    <FileText className="text-[#FFC700]" size={24} />
                  ) : (
                    <Clock className="text-gray-600" size={24} />
                  )}
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  report.isAvailable
                    ? 'bg-[#FFC700] text-black'
                    : 'bg-white/5 text-gray-600'
                }`}>
                  {report.category}
                </span>
              </div>

              <h3 className={`mb-2 text-xl font-bold ${
                report.isAvailable ? 'text-white' : 'text-gray-600'
              }`}>
                {report.title}
              </h3>
              
              {report.isAvailable ? (
                <>
                  <p className="text-gray-400 mb-4 leading-relaxed line-clamp-4">
                    {report.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{new Date(report.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div>{report.pages} pages</div>
                  </div>

                  <a
                    href={report.downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-[#FFC700] hover:bg-[#FFD700] text-black font-semibold rounded-lg transition-colors"
                  >
                    <Download size={18} />
                    <span>Download Report</span>
                  </a>
                </>
              ) : (
                <>
                  <p className="text-gray-600 mb-4 h-20 flex items-center justify-center italic">
                    New report coming soon...
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>TBA</span>
                    </div>
                    <div>— pages</div>
                  </div>

                  <button
                    disabled
                    className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-white/5 text-gray-600 rounded-lg cursor-not-allowed"
                  >
                    <Download size={18} />
                    <span>Not Available</span>
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}