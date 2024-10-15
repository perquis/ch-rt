export enum Feature {
  ADDWASH_DOOR = 'ADDWASH_DOOR',
  AI_CONTROL_PANEL = 'AI_CONTROL_PANEL',
  INVERTER_MOTOR = 'INVERTER_MOTOR',
  ELECTRONIC_DISPLAY = 'ELECTRONIC_DISPLAY',
}

export const getFeatureTranslation = (feature: Feature): string => {
  switch (feature) {
    case Feature.ADDWASH_DOOR:
      return 'Drzwi AddWash';
    case Feature.AI_CONTROL_PANEL:
      return 'Panel AI Control';
    case Feature.INVERTER_MOTOR:
      return 'Silnik inwerterowy';
    case Feature.ELECTRONIC_DISPLAY:
      return 'Wyświetlacz elektroniczny';
  }
};
