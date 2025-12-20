import { Music, FileText, Mic, Image as ImageIcon, Clock } from 'lucide-react';
import { useState } from 'react';

const songs = [
  {
    id: 1,
    title: 'Khirdki ke bahr-',
    genre: 'Indie Pop',
    isAvailable: true,
    link: 'https://your-song-link.com', // ✅ add real link later
  },
  {
    id: 2,
    title: 'Song Title (Coming Soon)',
    genre: 'Coming Soon',
    isAvailable: false,
    link: null,
  },
  {
    id: 3,
    title: 'Song Title (Coming Soon)',
    genre: 'Coming Soon',
    isAvailable: false,
    link: null,
  },
  {
    id: 4,
    title: 'Song Title (Coming Soon)',
    genre: 'Coming Soon',
    isAvailable: false,
    link: null,
  },
];

const lyrics = [
  { id: 1, title: 'Lyrics Title (Coming Soon)', preview: 'New lyrics coming soon...', isAvailable: false },
  { id: 2, title: 'Lyrics Title (Coming Soon)', preview: 'New lyrics coming soon...', isAvailable: false },
  { id: 3, title: 'Lyrics Title (Coming Soon)', preview: 'New lyrics coming soon...', isAvailable: false },
];

const recordings = [
  { id: 1, title: 'Recording Title (Coming Soon)', date: '', type: 'Coming Soon', isAvailable: false },
  { id: 2, title: 'Recording Title (Coming Soon)', date: '', type: 'Coming Soon', isAvailable: false },
  { id: 3, title: 'Recording Title (Coming Soon)', date: '', type: 'Coming Soon', isAvailable: false },
];

const pinterestBoards = [
  { id: 1, title: 'Board (Coming Soon)', pins: 0, image: '', isAvailable: false },
  { id: 2, title: 'Board (Coming Soon)', pins: 0, image: '', isAvailable: false },
  { id: 3, title: 'Board (Coming Soon)', pins: 0, image: '', isAvailable: false },
  { id: 4, title: 'Board (Coming Soon)', pins: 0, image: '', isAvailable: false },
];

type Tab = 'songs' | 'lyrics' | 'recordings' | 'pinterest';

export function Creativity() {
  const [activeTab, setActiveTab] = useState<Tab>('songs');

  const tabs = [
    { id: 'songs' as Tab, label: 'Songs', icon: Music },
    { id: 'lyrics' as Tab, label: 'Lyrics', icon: FileText },
    { id: 'recordings' as Tab, label: 'Recordings', icon: Mic },
    { id: 'pinterest' as Tab, label: 'Pinterest', icon: ImageIcon },
  ];

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4 text-4xl sm:text-5xl font-bold">
            CREATIVE <span className="text-[#FFC700]">CORNER</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Beyond code and design, I express myself through music, writing, and visual inspiration.
            Creative content coming soon!
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all font-semibold ${
                  activeTab === tab.id
                    ? 'bg-[#FFC700] text-black shadow-lg shadow-[#FFC700]/30'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <Icon size={20} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* CONTENT */}
        <div className="max-w-5xl mx-auto">

          {/* SONGS */}
          {activeTab === 'songs' && (
            <div className="space-y-4">
              {songs.map((song) => {
                const card = (
                  <>
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-full ${
                          song.isAvailable && song.link
                            ? 'bg-[#FFC700] text-black'
                            : 'bg-white/5 text-gray-600'
                        }`}
                      >
                        {song.isAvailable && song.link ? <Music size={20} /> : <Clock size={20} />}
                      </div>

                      <div>
                        <div className={song.isAvailable ? 'text-white' : 'text-gray-600'}>
                          {song.title}
                        </div>
                        <div className="text-gray-500 text-sm">{song.genre}</div>
                      </div>
                    </div>

                    <div className="text-sm font-semibold">
                      {song.link && song.isAvailable ? (
                        <span className="text-[#FFC700]">Play →</span>
                      ) : (
                        <span className="text-gray-600">Coming Soon</span>
                      )}
                    </div>
                  </>
                );

                return song.link && song.isAvailable ? (
                  <a
                    key={song.id}
                    href={song.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                  >
                    {card}
                  </a>
                ) : (
                  <div
                    key={song.id}
                    className="flex items-center justify-between p-4 rounded-lg bg-white/[0.02] border border-white/5 cursor-not-allowed"
                  >
                    {card}
                  </div>
                );
              })}
            </div>
          )}

          {/* LYRICS */}
          {activeTab === 'lyrics' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lyrics.map((lyric) => (
                <div
                  key={lyric.id}
                  className="p-6 rounded-lg bg-white/[0.02] border border-white/5"
                >
                  <h3 className="mb-4 text-xl font-bold text-gray-600">
                    {lyric.title}
                  </h3>
                  <p className="italic mb-4 text-gray-600">
                    {lyric.preview}
                  </p>
                  <span className="text-gray-600">Not Available Yet</span>
                </div>
              ))}
            </div>
          )}

          {/* RECORDINGS */}
          {activeTab === 'recordings' && (
            <div className="space-y-4">
              {recordings.map((recording) => (
                <div
                  key={recording.id}
                  className="flex items-center justify-between p-6 rounded-lg bg-white/[0.02] border border-white/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-white/5">
                      <Clock className="text-gray-600" size={24} />
                    </div>
                    <div>
                      <div className="text-gray-600">{recording.title}</div>
                      <div className="text-gray-500 text-sm">{recording.type}</div>
                    </div>
                  </div>
                  <span className="text-gray-600">Not Available</span>
                </div>
              ))}
            </div>
          )}

          {/* PINTEREST */}
          {activeTab === 'pinterest' && (
            <div>
              <p className="text-gray-400 mb-6">
                My curated collections of visual inspiration (Coming Soon)
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {pinterestBoards.map((board) => (
                  <div key={board.id}>
                    <div className="aspect-square rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                      <Clock className="text-gray-600" size={32} />
                    </div>
                    <h4 className="text-gray-600 mt-2">{board.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
