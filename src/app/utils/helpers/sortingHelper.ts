import { Sorting } from "app/models";
import { SortingColumnEnum, SortingEnum } from "./generalType";
import { CoreGeneral } from "app/models/entity/coreGeneral";
import { SortingType } from "./generalType";

export class SortingHelper {
  public static getSortById(sort: CoreGeneral): Sorting {
    const sortValue: SortingType = sort.id as SortingType;
    let sorting: Sorting = {
        sortColumn: '',
        sortAscending: ''
    };
    switch(sortValue) {
      case (SortingType.CompanyNameInterDesc): {
        sorting.sortColumn = SortingColumnEnum.CompanyNameInter.toString();
        sorting.sortAscending = SortingEnum.DESC.toString();
        break;
      }
      case (SortingType.CompanyNameInterAsc): {
        sorting.sortColumn = SortingColumnEnum.CompanyNameInter.toString();
        sorting.sortAscending = SortingEnum.ASC.toString();
        break;
      }
      case (SortingType.CompanyNameLocalDesc): {
        sorting.sortColumn = SortingColumnEnum.CompanyNameLocal.toString();
        sorting.sortAscending = SortingEnum.DESC.toString();
        break;
      }
      case (SortingType.CompanyNameLocalAsc): {
        sorting.sortColumn = SortingColumnEnum.CompanyNameLocal.toString();
        sorting.sortAscending = SortingEnum.ASC.toString();
        break;
      }
      case (SortingType.CapitalDesc): {
        sorting.sortColumn = SortingColumnEnum.RegisteredCapital.toString();
        sorting.sortAscending = SortingEnum.DESC.toString();
        break;
      }
      case (SortingType.CapitalAsc): {
        sorting.sortColumn = SortingColumnEnum.RegisteredCapital.toString();
        sorting.sortAscending = SortingEnum.ASC.toString();
        break;
      }
      case (SortingType.YearDesc): {
        sorting.sortColumn = SortingColumnEnum.YearEstablishment.toString();
        sorting.sortAscending = SortingEnum.DESC.toString();
        break;
      }
      case (SortingType.YearAsc): {
        sorting.sortColumn = SortingColumnEnum.YearEstablishment.toString();
        sorting.sortAscending = SortingEnum.ASC.toString();
        break;
      }
      default: {
        sorting = null;
      }
    }

    return sorting;
  }

  public static getCoreGeneralByKey(sort: Sorting, listDropdown: CoreGeneral[]): CoreGeneral {
    return listDropdown.find(eachDropdown => {
      const eachSorting = this.getSortById(eachDropdown);
      if (eachSorting != null) {
        if (eachSorting.sortColumn === sort.sortColumn && eachSorting.sortAscending === sort.sortAscending) {
          return true;
        }
      }
      return false;
    });
  }
}
