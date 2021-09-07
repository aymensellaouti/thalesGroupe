import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdBtc',
})
export class UsdBtcPipe implements PipeTransform {
  transform(amount: number, isUsdBTc = 1): number {
    if (isUsdBTc) {
      return amount / 51200;
    }
    return amount * 51200;
  }
}
