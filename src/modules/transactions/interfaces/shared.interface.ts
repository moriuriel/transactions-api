export type Owner = {
  _id: string;
};

export enum TRANSACTION_TAG {
  'INCOME',
  'OUTCOME',
}

export interface ITransaction {
  title: string;
  tag: TRANSACTION_TAG;
  isPaid: boolean;
  Owner: Owner;
}
