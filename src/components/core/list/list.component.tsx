import { ReactElement } from 'react';

import { List as AntList, ListProps as AntListProps } from 'antd';

export type ListProps<T> = AntListProps<T>;

export const List = <T,>(props: ListProps<T>): ReactElement => {
  return <AntList {...props} />;
};

export const ListItem = AntList.Item;
