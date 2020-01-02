import { LicenseManager } from 'ag-grid-enterprise';

export function CrackAgGrid() {
  if (LicenseManager) { LicenseManager.prototype.validateLicense = () => true; }
}

CrackAgGrid();
