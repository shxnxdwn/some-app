import { useMemo, useState } from 'react';
import { filterByLength, type LengthFilterType } from '@/features/PostLengthFilter';
import type { PostType } from '@/entities/Post';

type UsePostPaginationProps = {
  posts: PostType[];
  itemsPerPage: number;
};

const usePostPagination = ({ posts, itemsPerPage }: UsePostPaginationProps) => {
  const [activeFilter, setActiveFilter] = useState<LengthFilterType>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => filterByLength(posts, activeFilter), [posts, activeFilter]);

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredPosts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredPosts, currentPage, itemsPerPage]);

  const handleFilterChange = (filter: LengthFilterType) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  return {
    currentPage,
    totalPages,
    paginatedPosts,
    activeFilter,
    handleFilterChange,
    handlePageChange: setCurrentPage
  };
};

export { usePostPagination };
