// @flow
import React from 'react';
import Icon from './Icon';
import type { Props } from './Icon';

export default function CollectionIcon({
  expanded,
  ...rest
}: Props & { expanded: boolean }) {
  return (
    <Icon {...rest}>
      {expanded ? (
        <path d="M16.701875,4.16415178 L17,4.14285714 C18.1045695,4.06395932 19,5.02334914 19,6.28571429 L19,17.7142857 C19,18.9766509 18.1045695,19.9360407 17,19.8571429 L16.701875,19.8358482 C16.8928984,19.371917 17,18.8348314 17,18.25 L17,5.75 C17,5.16516859 16.8928984,4.62808299 16.701875,4.16415178 Z M14,3.36363636 C15.1045695,3.16280555 16,4.15126779 16,5.57142857 L16,18.4285714 C16,19.8487322 15.1045695,20.8371945 14,20.6363636 L7,19.3636364 C5.8954305,19.1628055 5,18.1045695 5,17 L5,7 C5,5.8954305 5.8954305,4.83719445 7,4.63636364 L14,3.36363636 Z M7.5,6.67532468 C7.22385763,6.71118732 7,6.97574633 7,7.26623377 L7,16.7337662 C7,17.0242537 7.22385763,17.2888127 7.5,17.3246753 L8.5,17.4545455 C8.77614237,17.4904081 9,17.272365 9,16.9675325 L9,7.03246753 C9,6.72763504 8.77614237,6.5095919 8.5,6.54545455 L7.5,6.67532468 Z" />
      ) : (
        <path d="M7,4 L17,4 C18.1045695,4 19,4.8954305 19,6 L19,18 C19,19.1045695 18.1045695,20 17,20 L7,20 C5.8954305,20 5,19.1045695 5,18 L5,6 L5,6 C5,4.8954305 5.8954305,4 7,4 L7,4 Z M7.5,6 C7.22385763,6 7,6.22385763 7,6.5 L7,17.5 C7,17.7761424 7.22385763,18 7.5,18 L8.5,18 C8.77614237,18 9,17.7761424 9,17.5 L9,6.5 C9,6.22385763 8.77614237,6 8.5,6 L7.5,6 Z" />
      )}
    </Icon>
  );
}