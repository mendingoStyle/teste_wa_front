import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableCellActions from 'components/Shared/Pagination/TableCellActions';
import IOrder from 'interfaces/models/order';
import React, { memo, useCallback, useState } from 'react';


interface IProps {
  order: IOrder;
  onEdit: (order: IOrder) => void;
  onDeleteComplete: () => void;
}

const ListItem = memo((props: IProps) => {
  const { order } = props;
  const [error, setError] = useState(false);
  const handleDismissError = useCallback(() => setError(null), []);

  return (
    <TableRow>
      <TableCell>{order.descricao}</TableCell>
      <TableCell>{order.quantidade}</TableCell>
      <TableCell>{order.valor}</TableCell>
      <TableCellActions error={error} onDismissError={handleDismissError} />
    </TableRow>
  );
});

export default ListItem;
