import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import recycloVisionImage from 'figma:asset/3fbe594fdd242debdcd078a6df63519023c05a92.png';
import customerImage from '../assets/customer.jpeg';
import successImage from '../assets/success.jpeg';
import automateImage from '../assets/automate.jpeg';

const projects = [
  {
    id: 1,
    title: 'RecycloVision: AI Waste Sorting',
    description: 'A computer vision-based machine learning project that automatically identifies and sorts waste materials into categories such as plastic, paper, metal, and glass using deep learning models.',
    tags: ['Python', 'OpenCV', 'CNN', 'TensorFlow'],
    image: recycloVisionImage,
    github: 'https://github.com/frdwish/RecycloVision-AI-Waste-Sorting',
    demo: '#',
    highlights: [
      'Automated waste classification with 90%+ accuracy',
      'Real-time detection using computer vision',
      'Deployed CNN model trained on diverse waste datasets'
    ]
  },
  {
    id: 2,
    title: 'Customer Support Classifier',
    description: 'End-to-end NLP system built with FastAPI and Streamlit that intelligently classifies customer support tickets into categories like billing, technical issues, cancellations, and general inquiries.',
    tags: ['Python', 'NLP', 'FastAPI', 'Streamlit', 'TF-IDF', 'XGBoost'],
    image: customerImage,
    github: 'https://github.com/frdwish/customer-support-classifier',
    demo: '#',
    highlights: [
      'Multi-class text classification with XGBoost',
      'Interactive web interface with Streamlit',
      'RESTful API for seamless integration'
    ]
  },
  {
    id: 3,
    title: 'YouTube Analytics Dashboard',
    description: 'A comprehensive data analysis project that extracts meaningful insights from YouTube channel performance metrics and visualizes them through an interactive dashboard with various charts and graphs.',
    tags: ['Python', 'Jupyter Notebook', 'Pandas', 'Matplotlib'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
    github: 'https://github.com/frdwish/youtube-analytics-dashboard',
    demo: '#',
    highlights: [
      'Data-driven insights on channel performance',
      'Visualizations for engagement and growth trends',
      'Jupyter notebooks for reproducible analysis'
    ]
  },
  {
    id: 4,
    title: 'Student Success Predictor',
    description: 'A machine learning model that predicts student performance and success rates using various academic and demographic factors, deployed as an interactive web application using Streamlit.',
    tags: ['Python', 'Scikit-Learn', 'Streamlit'],
    image: successImage,
    github: 'https://github.com/frdwish/student-success-predictor',
    demo: '#',
    highlights: [
      'Predictive modeling with scikit-learn',
      'User-friendly interface for educators',
      'Feature importance analysis for intervention'
    ]
  },
  {
    id: 5,
    title: 'To Automate or Not Chatbot',
    description: 'A lightweight Python-based conversational chatbot that helps users decide whether a specific workflow or task should be automated, using decision tree logic and interactive queries.',
    tags: ['Python', 'Chatbot', 'NLP'],
    image: automateImage,
    github: 'https://github.com/frdwish/To-Automate-or-not-chatbot',
    demo: '#',
    highlights: [
      'Decision-making assistant for automation',
      'Interactive conversation flow',
      'Simple and efficient Python implementation'
    ]
  },
];

export function Projects() {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4 text-4xl sm:text-5xl font-bold">
            <span className="text-[#FFC700]">PROJECTS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A collection of my GitHub projects showcasing machine learning, data analysis, and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative"
              style={{
                transform: `rotate(${index % 2 === 0 ? '-' : ''}${1 + (index % 3)}deg)`,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `rotate(${index % 2 === 0 ? '-' : ''}${1 + (index % 3)}deg)`;
              }}
            >
              {/* Polaroid Card */}
              <div className="bg-white p-4 shadow-2xl relative">
                <div className="aspect-square overflow-hidden bg-gray-200 mb-4 relative">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover brightness-90"
                  />
                  {/* Graffiti-style text overlay */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <h3 
                      className="text-white text-center text-3xl sm:text-4xl uppercase leading-tight"
                      style={{ 
                        fontFamily: 'Impact, Arial Black, sans-serif',
                        textShadow: `
                          3px 3px 0px #000,
                          -1px -1px 0px #000,
                          1px -1px 0px #000,
                          -1px 1px 0px #000,
                          1px 1px 0px #000,
                          4px 4px 8px rgba(0,0,0,0.8)
                        `,
                        letterSpacing: '0.05em',
                        transform: 'rotate(-2deg)'
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>
                {/* Handwritten-style caption */}
                <div className="text-center pb-2">
                  <p className="text-black text-sm" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                    {project.tags.slice(0, 2).join(' • ')}
                  </p>
                </div>
              </div>
              
              {/* Hover Details */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-black/95 p-6 rounded-lg flex flex-col justify-center z-10">
                <h3 className="text-[#FFC700] mb-3 text-xl font-bold">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[#FFC700] text-black rounded text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-[#FFC700] transition-colors text-sm"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-[#FFC700] transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}