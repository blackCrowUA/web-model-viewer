import './left-drawer-content.component.css';

import { FC, useEffect, useState } from 'react';

import { Col, InputNumber, InputNumberProps, Slider } from 'antd';

import isNil from 'lodash.isnil';

import { useModelView } from '../../../hooks/model-view/model-view.hook.ts';

import { setCameraPositionToModelCenter } from '../../../utils/gsplat/camera/camera-position.util.ts';

import { Button } from '../../core/button/button.component.tsx';

type InputNumberOnChange = InputNumberProps['onChange'];

export const LeftDrawerContent: FC = () => {
  const { camera, controls } = useModelView();
  const [zoomSpeed, setZoomSpeed] = useState<number | undefined>(controls?.zoomSpeed);
  const [panSpeed, setPanSpeed] = useState<number | undefined>(controls?.panSpeed);
  const [orbitSpeed, setOrbitSpeed] = useState<number | undefined>(controls?.orbitSpeed);

  useEffect(() => {
    setZoomSpeed(controls?.zoomSpeed);
    setPanSpeed(controls?.panSpeed);
    setOrbitSpeed(controls?.orbitSpeed);
  }, [controls?.panSpeed, controls?.zoomSpeed, controls?.orbitSpeed]);

  const onChangeZoomSpeed: InputNumberOnChange = (value: number) => {
    if (isNaN(value) || isNil(controls)) {
      return;
    }
    controls.zoomSpeed = value;
    setZoomSpeed(value);
  };

  const onChangePanSpeed: InputNumberOnChange = (value: number) => {
    if (isNaN(value) || isNil(controls)) {
      return;
    }
    controls.panSpeed = value;
    setPanSpeed(value);
  };

  const onChangeOrbitSpeed: InputNumberOnChange = (value: number) => {
    if (isNaN(value) || isNil(controls)) {
      return;
    }
    controls.orbitSpeed = value;
    setOrbitSpeed(value);
  };

  return (
    <div className={'left-drawer-content'}>
      <h3>Camera settings</h3>
      <br />
      {isNil(controls) || isNil(camera) ? (
        <div>Model is not loaded</div>
      ) : (
        <>
          <p>Zoom speed</p>
          <div className={'left-drawer-content-sliders'}>
            <Col span={12}>
              <Slider max={1} min={0} step={0.1} value={zoomSpeed} onChange={onChangeZoomSpeed} />
            </Col>
            <Col span={4}>
              <InputNumber
                max={1}
                min={0}
                step={0.1}
                style={{ margin: '0 16px' }}
                value={zoomSpeed}
                onChange={onChangeZoomSpeed}
              />
            </Col>
          </div>

          <p>Pan speed</p>
          <div className={'left-drawer-content-sliders'}>
            <Col span={12}>
              <Slider max={1} min={0} step={0.1} value={panSpeed} onChange={onChangePanSpeed} />
            </Col>
            <Col span={4}>
              <InputNumber
                max={1}
                min={0}
                step={0.1}
                style={{ margin: '0 16px' }}
                value={panSpeed}
                onChange={onChangePanSpeed}
              />
            </Col>
          </div>

          <p>Orbit speed</p>
          <div className={'left-drawer-content-sliders'}>
            <Col span={12}>
              <Slider max={1} min={0} step={0.1} value={orbitSpeed} onChange={onChangeOrbitSpeed} />
            </Col>
            <Col span={4}>
              <InputNumber
                max={1}
                min={0}
                step={0.1}
                style={{ margin: '0 16px' }}
                value={orbitSpeed}
                onChange={onChangeOrbitSpeed}
              />
            </Col>
          </div>

          <Button onClick={() => setCameraPositionToModelCenter(controls, camera)}>Reset camera position</Button>
        </>
      )}
    </div>
  );
};
