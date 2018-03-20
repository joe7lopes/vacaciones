import React from 'react';
import PropTypes from 'prop-types';
import { View, Modal } from 'react-native';
import moment from 'moment/src/moment';
import DatepickerRange from 'react-native-range-datepicker';

const DatePicker = ({ onClose, onConfirm }) => (
  <Modal
    animationType="slide"
    transparent={false}
    onRequestClose={() => onClose}
  >
    <View style={{ marginTop: 22 }}>
      <DatepickerRange
        onConfirm={(startDate, endDate) => onConfirm(startDate, endDate)}
        onClose={() => onClose()}
        minDate={moment().format('YYYYMMDD')}
      />
    </View>
  </Modal>
);

DatePicker.prototype = {
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default DatePicker;
