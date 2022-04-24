const Tour = require('./../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllTours = catchAsync(async (req, res, next) => {
  const tours = await Tour.find();

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: tours.length,
    data: {
      tours
    }
  });

});

exports.getTour = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const tour = await Tour.findById(id);

  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });

});

exports.createTour = catchAsync(async (req, res, next) => {
  const newTour = await Tour.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      tour: newTour
    }
  });

});

exports.updateTour = catchAsync(async (req, res, next) => {
  const id = req.params.id;

  const tour = await Tour.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });

});

exports.deleteTour = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  await Tour.findByIdAndDelete(id);

  res.status(204).json({
    status: 'success',
    data: null
  });

});