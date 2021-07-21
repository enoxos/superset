/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { ReactNode } from 'react';
import { useDrag } from 'react-dnd';
import { styled } from '@superset-ui/core';
import { DatasourcePanelDndItem } from '../types';

const DatasourceItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.gridUnit * 6}px;
  cursor: pointer;

  > div {
    width: 100%;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.grayscale.light2};
  }
`;

interface DatasourcePanelDragWrapperProps extends DatasourcePanelDndItem {
  children?: ReactNode;
}

export default function DatasourcePanelDragWrapper(
  props: DatasourcePanelDragWrapperProps,
) {
  const [, drag] = useDrag({
    item: {
      value: props.value,
      type: props.type,
    },
  });

  return (
    <DatasourceItemContainer data-test="DatasourcePanelDragWrapper" ref={drag}>
      {props.children}
    </DatasourceItemContainer>
  );
}
