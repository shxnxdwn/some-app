import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { filterByLength, type LengthFilterType } from '@/features/PostLengthFilter';
import type { PostType } from '@/entities/Post';

type UsePostPaginationProps = {
  posts: PostType[];
  itemsPerPage: number;
};

const usePostPagination = ({ posts, itemsPerPage }: UsePostPaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = (searchParams.get('filter') as LengthFilterType) || 'all';
  const pageFromUrl = parseInt(searchParams.get('page') || '1', 10);
  const currentPage = isNaN(pageFromUrl) || pageFromUrl < 1 ? 1 : pageFromUrl;
  const filteredPosts = useMemo(() => filterByLength(posts, activeFilter), [posts, activeFilter]);

  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage) || 1;

  const actualPage = currentPage > totalPages ? totalPages : currentPage;

  const paginatedPosts = useMemo(() => {
    const startIndex = (actualPage - 1) * itemsPerPage;
    return filteredPosts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredPosts, actualPage, itemsPerPage]);

  const handleFilterChange = (filter: LengthFilterType) => {
    setSearchParams({
      filter: filter,
      page: '1'
    });
  };

  const handlePageChange = (page: number) => {
    setSearchParams({
      filter: activeFilter,
      page: page.toString()
    });
  };

  return {
    currentPage: actualPage,
    totalPages,
    paginatedPosts,
    activeFilter,
    handleFilterChange,
    handlePageChange
  };
};

export { usePostPagination };
