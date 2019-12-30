import * as fa from '../lang/fa-ir.json';




class LayoutConfig {


  constructor(lan = fa) {
    this._dic = lan;
  }

  private _dic;

  get dictionary() {
    return this._dic;
  }

  public setLanguage(lang) {
    this._dic = lang;
  }

}

export const layoutConfig: LayoutConfig = new LayoutConfig();
