type PaginationProps = {
  current: number;
  total: number;
  onChange: (page: number) => void;
};

export default function Pagination({ current, total, onChange }: PaginationProps) {
  return (
    <div>
      <button disabled={current <= 1} onClick={() => onChange(current - 1)}>
        Previous
      </button>
      <span> Page {current} of {total} </span>
      <button disabled={current >= total} onClick={() => onChange(current + 1)}>
        Next
      </button>
    </div>
  );
}
