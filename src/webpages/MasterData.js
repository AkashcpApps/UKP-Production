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

export const MasterData = () => {

  return (
    <div>
            <div style={{ marginLeft: '260px' }}>
                <h3>Districts</h3>
            </div>
            <div className='create-new-districst-form'>
                <AddNewDistrictDialog />
            </div>
            <div className="districts-data-grid">
              <DistrictDataTable />
          </div>
    </div>
  );
};
  
export const Districts = () => {

    return (
        <div>
            <div style={{ marginLeft: '260px' }}>
                <h3>Districts</h3>
            </div>
            <div className='create-new-districst-form'>
                <AddNewDistrictDialog />
            </div>
            <div className="districts-data-grid">
              <DistrictDataTable />
          </div>
    </div>
  );
};
  
export const Taluks = () => {
  return (
        <div>
            <div style={{ marginLeft: '260px' }}>
                <h3>Taluks</h3>
            </div>
            <div className='create-new-districst-form'>
                <AddNewTalukDialog />
            </div>
            <div className="districts-data-grid">
                <TalukDataTable />
            </div>
        </div>
  );
};
  
export const Villages = () => {
  return (
      <div>
          <div style={{ marginLeft: '260px' }}>
              <h3>Villages</h3>
          </div>
          <div className='create-new-districst-form'>
              <AddNewVillageDialog />
          </div>
          <div className="districts-data-grid">
              <VillageDataTable />
          </div>
      </div>
  );
};

export const StructureElements = () => {
  return (
      <div>
          <div style={{ marginLeft: '260px' }}>
              <h3>Strucute Elements</h3>
          </div>
          <div className='create-new-districst-form'>
              <AddNewStructureElementDialog />
          </div>
          <div className="districts-data-grid">
              <StructureElementsDataTable />
          </div>
      </div>
  );
};

export const StructureType = () => {
  return (
      <div>
          <div style={{ marginLeft: '260px' }}>
              <h3>Strucute Types</h3>
          </div>
          <div className='create-new-districst-form'>
              <AddNewStructureTypeDialog />
          </div>
          <div className="districts-data-grid">
              <StructureTypeDataTable />
          </div>
      </div>
  );
};

export const UOM = () => {
  return (
      <div>
          <div style={{ marginLeft: '260px' }}>
              <h3>Unit of Measurement</h3>
          </div>
          <div className='create-new-districst-form'>
              <AddUOMDialog />
          </div>
          <div className="districts-data-grid">
              <UOMDataTable />
          </div>
      </div>
  );
};

export const DSRDetails = () => {
  return (
      <div>
          <div style={{ marginLeft: '260px' }}>
              <h3>District Schedule Rate</h3>
          </div>
          <div className='create-new-districst-form'>
              <AddNewDSRDetailsDialog />
          </div>
          <div className="districts-data-grid">
              <DSRDetailsDataTable />
          </div>
      </div>
  );
};

export const Depriciation = () => {
  return (
      <div>
          <div style={{ marginLeft: '260px' }}>
              <h3>Rate of Depreciation</h3>
          </div>
          <div className='create-new-districst-form'>
              <AddNewRateOfDepreciation />
          </div>
          <div className="districts-data-grid">
              <DepreciationDataTable />
          </div>
      </div>
  );
};