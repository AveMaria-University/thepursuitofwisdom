import { getCourseBySlug } from '@/data/courses';
import type { Metadata } from 'next';

interface Props { params: { slug: string } }

export function generateMetadata({ params }: Props): Metadata {
  const course = getCourseBySlug(params.slug);
  if (!course) return {};
  return {
    title: `${course.title} | The Pursuit of Wisdom`,
    description: course.description || `${course.title} course on The Pursuit of Wisdom.`
  };
}
