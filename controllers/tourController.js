const Tour = require('./../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

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

  if (!tour) {
    return next(new AppError('No tour found with that ID'), 404);
  }

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

  if (!tour) {
    return next(new AppError('No tour found with that ID'), 404);
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });

});

exports.deleteTour = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const tour = await Tour.findByIdAndDelete(id);

  if (!tour) {
    return next(new AppError('No tour found with that ID'), 404);
  }

  res.status(204).json({
    status: 'success',
    data: null
  });

});

// this comment use to test merge on github, because usually i use git lab with with the company project. So i want to make sure that github work in the same way