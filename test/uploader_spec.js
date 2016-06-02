var should = require('should'),
    stream = require('stream'),
    fs = require('fs'),
    Uploader = require('../lib/uploader');

describe('Uploader', function(){
  it('uses readable stream', function(){
    var bufferStream = fs.createReadStream(__dirname + '/request_spec.js');
    var uploader = new Uploader(bufferStream, {});
    uploader.stream.should.be.instanceOf(stream.Readable);
  });

  describe('when passed a string', function(){
    it('uses a relative path to produce a readable stream', function(){
      var pathToFile = 'test/request_spec.js';
      var uploader = new Uploader(pathToFile, {});
      uploader.stream.should.be.instanceOf(stream.Readable);
    });
    it('uses an absolute path to produce a readable stream', function(){
      var pathToFile = __dirname + '/request_spec.js';
      var uploader = new Uploader(pathToFile, {});
      uploader.stream.should.be.instanceOf(stream.Readable);
    });
  });
});
