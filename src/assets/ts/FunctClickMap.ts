import { RoomActivator } from './FunctRoomActivator';

export function ClickMap(event: any): void {
  console.log('1 - clickmap recoit event : ' + event);
  const idAttr = event.target.id;
  console.log('2 - idAttr est défini : ' + idAttr);
  RoomActivator(idAttr);
}
