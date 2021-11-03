import { Machines } from 'meteor/igoandtrack:machines-collection';
import logger from 'winston';

Meteor.methods({

  newMachine(json) {

    if (Machines.findOne({name: json.name})) {
      throw new Meteor.Error('duplicate-name', 'El nombre de la máquina ya existe.');
    }

    return Machines.insert(json);
  },

  editMachine(json) {
    return Machines.update({ _id: json._id }, { $set: json });
  },

  deleteMachine(machineId) {

    logger.info('deleteMachine', machineId);

    return Machines.remove({_id: machineId})
  }
    
});
