import {ColumnDef} from "@tanstack/react-table"
import { Character } from "../../services/types/characterTypes";
import { useNavigate } from '@tanstack/react-router';

export const CharacterGridColumns=()=>{
     const navigate = useNavigate();
const CharacterGridColumnsData: ColumnDef<Character>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
      cell: ({row}) => (
        <button
          style={{
            color: 'blue',
            textDecoration: 'underline',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
          onClick={e => {
            e.stopPropagation();
            navigate({ to: `/character/${row.original.id}` });
          }}
        >
          {row.getValue("id") as number}
        </button>
      ),
    },
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'status', header: 'Status' },
    { accessorKey: 'species', header: 'Species' },
  ];
  return CharacterGridColumnsData;
}