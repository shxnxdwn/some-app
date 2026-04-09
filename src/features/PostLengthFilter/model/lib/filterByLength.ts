import type { PostType } from '@/entities/Post';

type LengthFilterType = 'all' | 'short' | 'medium' | 'long';

const FilterLimit = {
  Short: 20,
  Medium: 40
} as const;

const filterByLength = (posts: PostType[], filter: LengthFilterType): PostType[] => {
  switch (filter) {
    case 'short':
      return posts.filter((post) => post.title.length < FilterLimit.Short);

    case 'medium':
      return posts.filter((post) => post.title.length >= FilterLimit.Short && post.title.length < FilterLimit.Medium);

    case 'long':
      return posts.filter((post) => post.title.length >= FilterLimit.Medium);

    case 'all':
    default:
      return posts;
  }
};

export { type LengthFilterType, filterByLength };
