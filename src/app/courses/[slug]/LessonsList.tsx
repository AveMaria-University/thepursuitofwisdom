"use client";
import { CourseSection } from '@/data/courses';
import { useState } from 'react';
import DropboxVideo from '@/components/DropboxVideo';

interface Props {
  sections: CourseSection[];
  courseTitle: string;
}

export default function LessonsList({ sections, courseTitle }: Props) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 overflow-hidden">
      {sections.map((s, idx) => {
        const isLast = idx === sections.length - 1;
        const clickable = !!s.videoUrl;
        return (
          <div
            key={s.order}
            className={`grid grid-cols-12 gap-6 px-6 md:px-10 py-8 relative ${!isLast ? 'border-b border-gray-200' : ''} hover:bg-white transition-colors ${clickable ? 'cursor-pointer' : ''}`}
            onClick={() => clickable && setActiveVideo(s.videoUrl || null)}
          >
            <div className="col-span-2 md:col-span-1 flex">
              <span className="text-pursuit-gold font-semibold text-xl md:text-2xl leading-none self-start pt-1">{String(s.order).padStart(2,'0')}</span>
            </div>
            <div className="col-span-10 md:col-span-8 pr-4">
              <h4 className="font-crimson font-semibold text-lg md:text-xl mb-2">{s.title}</h4>
              <p className="text-gray-600 text-sm mb-4 max-w-2xl">{s.summary}</p>
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <span className="inline-block w-3 h-3 rounded-full border border-gray-400" />
                  <span className="capitalize">{s.type || 'video'}</span>
                  {s.completed && <span className="text-green-600">✔</span>}
                </div>
                {s.duration && <span className="hidden md:inline-block text-gray-400">•</span>}
                {s.duration && <span>{s.duration}</span>}
              </div>
            </div>
            <div className="hidden md:flex col-span-3 items-center justify-end text-sm text-pursuit-gold font-medium">
              {clickable && <span className="opacity-60 group-hover:opacity-100 transition-opacity">Play ▸</span>}
            </div>
          </div>
        );
      })}
      {activeVideo && (
        <DropboxVideo
          dropboxUrl={activeVideo}
          title={courseTitle}
          open={true}
          onClose={() => setActiveVideo(null)}
          hideThumbnail
        />
      )}
    </div>
  );
}
