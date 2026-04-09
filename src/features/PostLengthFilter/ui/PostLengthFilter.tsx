import styles from './PostLengthFilter.module.css';
import type { LengthFilterType } from '@/features/PostLengthFilter/model/lib/filterByLength.ts';
import { FilterConfig, filterTypes } from '@/features/PostLengthFilter/model/config.ts';
import Button from '@/shared/ui/Button';

type PostLengthFilterProps = {
  activeFilter: LengthFilterType;
  onFilterChange: (filter: LengthFilterType) => void;
  className?: string;
};

const PostLengthFilter = ({ activeFilter, onFilterChange, className = '' }: PostLengthFilterProps) => {
  return (
    <div className={styles.filterContainer}>
      <p>Фильтр по длине заголовка</p>
      <div className={`${styles.filterButtonContainer} ${className}`}>
        {filterTypes.map((filterType) => (
          <Button
            key={filterType}
            variant={activeFilter === filterType ? 'primary' : 'ghost'}
            onClick={() => onFilterChange(filterType)}
          >
            {FilterConfig[filterType]}
          </Button>
        ))}
      </div>
    </div>
  );
};

export { PostLengthFilter };
