// src/components/CharacterTable.tsx
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { Character } from '../../services/types/characterTypes';
import { CharacterGridColumns } from './CharacterGridColumns';


type Props = {
  characters: Character[];
};

export default function CharacterGrid({ characters }: Props) {
 
const gridCols=CharacterGridColumns();

  const table = useReactTable({
    data: characters,
    columns:gridCols,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount: -1, 
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map(row => (
          <tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
