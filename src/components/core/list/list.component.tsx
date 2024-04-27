import './list.component.css';

import { ReactElement } from 'react';

import { List as AntList, ListProps as AntListProps } from 'antd';

export type ListProps<T> = AntListProps<T>;

export const List = <T,>(props: ListProps<T>): ReactElement => {
  return (
    <div className={'list-component-layout'}>
      <AntList {...props} />
    </div>
  );
};

export const ListItem = AntList.Item;
