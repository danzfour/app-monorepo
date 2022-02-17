export enum ManageTokenRoutes {
  Listing = 'ListTokensModal',
  AddToken = 'AddToken',
  CustomToken = 'CustomToken',
}

export type ManageTokenRoutesParams = {
  [ManageTokenRoutes.Listing]: undefined;
  [ManageTokenRoutes.AddToken]: {
    name: string;
    symbol: string;
    address: string;
    decimal: number;
  };
  [ManageTokenRoutes.CustomToken]: { address?: string } | undefined;
};
