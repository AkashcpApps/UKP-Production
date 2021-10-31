import React from "react";
import DistrictDataTable from '../components/DistrictDataTable';
import AddNewDistrictDialog from '../components/AddNewDistrictDialog';
import TalukDataTable from '../components/TalukDataTable';
import AddNewTalukDialog from '../components/AddNewTalukDialog';
import VillageDataTable from '../components/VillageDataTable';
import AddNewVillageDialog from '../components/AddNewVillageDialog';
import StructureElementsDataTable from '../components/StructureElementsDataTable';
import AddNewStructureElementDialog from '../components/AddNewStructureElementDialog';
import StructureTypeDataTable from '../components/StructureTypeDataTable';
import AddNewStructureTypeDialog from '../components/AddNewStructureTypeDialog';
import UOMDataTable from '../components/UOMDataTable';
import AddUOMDialog from '../components/AddUOMDialog';
import AddNewDSRDetailsDialog from '../components/AddNewDSRDetailsDialog';
import DSRDetailsDataTable from '../components/DSRDetailsDataTable';
import DepreciationDataTable from '../components/DepreciationDataTable';
import AddNewRateOfDepreciation from '../components/AddNewRateOfDepreciation';
import './MasterData.css';
import AddNewTextEntryDialog from "../components/AddNewTextEntryDialog";
import TextEntryDataTable from "../components/TextEntryDataTable";
  
export const Utilities = () => {
  return (
    <div className="textentry">
      <div>
          <div style={{ marginLeft: '260px' }}>
              <h3>Text Entry</h3>
          </div>
          <div className='create-new-districst-form'>
              <AddNewTextEntryDialog />
          </div>
          <div className="districts-data-grid">
              <TextEntryDataTable/>
          </div>
      </div>
    </div>
  );
};

export const TextEntry = () => {
  return (
    <div className="textentry">
      <div>
          <div style={{ marginLeft: '260px' }}>
              <h3>Text Entry</h3>
          </div>
          <div className='create-new-districst-form'>
              <AddNewTextEntryDialog />
          </div>
          <div className="districts-data-grid">
              <TextEntryDataTable/>
          </div>
      </div>
    </div>
  );
};

export const GenerateDrawing = () => {
  return (
    <div className="generatedrawing">
      <h1>Generation of Drawings using Auto CAD by providing the required coordinates</h1>
    </div>
  );
};
  
