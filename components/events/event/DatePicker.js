import React from 'react';
import PropTypes from 'prop-types';
import { View, Modal } from 'react-native';
import moment from 'moment/src/moment';
import DatepickerRange from 'react-native-range-datepicker';

const DatePicker = ({
  startDate, endDate, onClose, onConfirm
}) => (
  <Modal
    animationType="slide"
    transparent={false}
    onRequestClose={() => onClose}
  >
    <View style={{ marginTop: 22 }}>
      <DatepickerRange
        startDate={startDate.format('YYYYMMDD')}
        untilDate={endDate.format('YYYYMMDD')}
        onConfirm={(_startDate, _endDate) => onConfirm(_startDate, _endDate)}
        onClose={() => onClose()}
        minDate={moment().format('YYYYMMDD')}
        showReset={false}
      />
    </View>
  </Modal>
);

DatePicker.prototype = {
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default DatePicker;
