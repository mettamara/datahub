//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

DataHub_get_version_args = function(args) {
};
DataHub_get_version_args.prototype = {};
DataHub_get_version_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataHub_get_version_args.prototype.write = function(output) {
  output.writeStructBegin('DataHub_get_version_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

DataHub_get_version_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
  }
};
DataHub_get_version_result.prototype = {};
DataHub_get_version_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.DOUBLE) {
        this.success = input.readDouble().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataHub_get_version_result.prototype.write = function(output) {
  output.writeStructBegin('DataHub_get_version_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.DOUBLE, 0);
    output.writeDouble(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

DataHub_connect_args = function(args) {
  this.con_params = null;
  if (args) {
    if (args.con_params !== undefined) {
      this.con_params = args.con_params;
    }
  }
};
DataHub_connect_args.prototype = {};
DataHub_connect_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.con_params = new DHConnectionParams();
        this.con_params.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataHub_connect_args.prototype.write = function(output) {
  output.writeStructBegin('DataHub_connect_args');
  if (this.con_params !== null && this.con_params !== undefined) {
    output.writeFieldBegin('con_params', Thrift.Type.STRUCT, 1);
    this.con_params.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

DataHub_connect_result = function(args) {
  this.success = null;
  this.ex = null;
  if (args instanceof DHException) {
    this.ex = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.ex !== undefined) {
      this.ex = args.ex;
    }
  }
};
DataHub_connect_result.prototype = {};
DataHub_connect_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new DHConnection();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ex = new DHException();
        this.ex.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataHub_connect_result.prototype.write = function(output) {
  output.writeStructBegin('DataHub_connect_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.ex !== null && this.ex !== undefined) {
    output.writeFieldBegin('ex', Thrift.Type.STRUCT, 1);
    this.ex.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

DataHub_list_repos_args = function(args) {
  this.con = null;
  if (args) {
    if (args.con !== undefined) {
      this.con = args.con;
    }
  }
};
DataHub_list_repos_args.prototype = {};
DataHub_list_repos_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.con = new DHConnection();
        this.con.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataHub_list_repos_args.prototype.write = function(output) {
  output.writeStructBegin('DataHub_list_repos_args');
  if (this.con !== null && this.con !== undefined) {
    output.writeFieldBegin('con', Thrift.Type.STRUCT, 1);
    this.con.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

DataHub_list_repos_result = function(args) {
  this.success = null;
  this.ex = null;
  if (args instanceof DHException) {
    this.ex = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.ex !== undefined) {
      this.ex = args.ex;
    }
  }
};
DataHub_list_repos_result.prototype = {};
DataHub_list_repos_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new DHQueryResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ex = new DHException();
        this.ex.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataHub_list_repos_result.prototype.write = function(output) {
  output.writeStructBegin('DataHub_list_repos_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.ex !== null && this.ex !== undefined) {
    output.writeFieldBegin('ex', Thrift.Type.STRUCT, 1);
    this.ex.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

DataHub_list_tables_args = function(args) {
  this.con = null;
  this.repo = null;
  if (args) {
    if (args.con !== undefined) {
      this.con = args.con;
    }
    if (args.repo !== undefined) {
      this.repo = args.repo;
    }
  }
};
DataHub_list_tables_args.prototype = {};
DataHub_list_tables_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.con = new DHConnection();
        this.con.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.repo = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataHub_list_tables_args.prototype.write = function(output) {
  output.writeStructBegin('DataHub_list_tables_args');
  if (this.con !== null && this.con !== undefined) {
    output.writeFieldBegin('con', Thrift.Type.STRUCT, 1);
    this.con.write(output);
    output.writeFieldEnd();
  }
  if (this.repo !== null && this.repo !== undefined) {
    output.writeFieldBegin('repo', Thrift.Type.STRING, 2);
    output.writeString(this.repo);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

DataHub_list_tables_result = function(args) {
  this.success = null;
  this.ex = null;
  if (args instanceof DHException) {
    this.ex = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.ex !== undefined) {
      this.ex = args.ex;
    }
  }
};
DataHub_list_tables_result.prototype = {};
DataHub_list_tables_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new DHQueryResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ex = new DHException();
        this.ex.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataHub_list_tables_result.prototype.write = function(output) {
  output.writeStructBegin('DataHub_list_tables_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.ex !== null && this.ex !== undefined) {
    output.writeFieldBegin('ex', Thrift.Type.STRUCT, 1);
    this.ex.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

DataHub_execute_sql_args = function(args) {
  this.con = null;
  this.query = null;
  this.query_params = null;
  if (args) {
    if (args.con !== undefined) {
      this.con = args.con;
    }
    if (args.query !== undefined) {
      this.query = args.query;
    }
    if (args.query_params !== undefined) {
      this.query_params = args.query_params;
    }
  }
};
DataHub_execute_sql_args.prototype = {};
DataHub_execute_sql_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.con = new DHConnection();
        this.con.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.query = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.LIST) {
        var _size32 = 0;
        var _rtmp336;
        this.query_params = [];
        var _etype35 = 0;
        _rtmp336 = input.readListBegin();
        _etype35 = _rtmp336.etype;
        _size32 = _rtmp336.size;
        for (var _i37 = 0; _i37 < _size32; ++_i37)
        {
          var elem38 = null;
          elem38 = input.readString().value;
          this.query_params.push(elem38);
        }
        input.readListEnd();
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataHub_execute_sql_args.prototype.write = function(output) {
  output.writeStructBegin('DataHub_execute_sql_args');
  if (this.con !== null && this.con !== undefined) {
    output.writeFieldBegin('con', Thrift.Type.STRUCT, 1);
    this.con.write(output);
    output.writeFieldEnd();
  }
  if (this.query !== null && this.query !== undefined) {
    output.writeFieldBegin('query', Thrift.Type.STRING, 2);
    output.writeString(this.query);
    output.writeFieldEnd();
  }
  if (this.query_params !== null && this.query_params !== undefined) {
    output.writeFieldBegin('query_params', Thrift.Type.LIST, 3);
    output.writeListBegin(Thrift.Type.STRING, this.query_params.length);
    for (var iter39 in this.query_params)
    {
      if (this.query_params.hasOwnProperty(iter39))
      {
        iter39 = this.query_params[iter39];
        output.writeString(iter39);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

DataHub_execute_sql_result = function(args) {
  this.success = null;
  this.ex = null;
  if (args instanceof DHException) {
    this.ex = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.ex !== undefined) {
      this.ex = args.ex;
    }
  }
};
DataHub_execute_sql_result.prototype = {};
DataHub_execute_sql_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new DHQueryResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ex = new DHException();
        this.ex.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataHub_execute_sql_result.prototype.write = function(output) {
  output.writeStructBegin('DataHub_execute_sql_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.ex !== null && this.ex !== undefined) {
    output.writeFieldBegin('ex', Thrift.Type.STRUCT, 1);
    this.ex.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

DataHub_load_args = function(args) {
  this.con = null;
  this.url = null;
  if (args) {
    if (args.con !== undefined) {
      this.con = args.con;
    }
    if (args.url !== undefined) {
      this.url = args.url;
    }
  }
};
DataHub_load_args.prototype = {};
DataHub_load_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.con = new DHConnection();
        this.con.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.url = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataHub_load_args.prototype.write = function(output) {
  output.writeStructBegin('DataHub_load_args');
  if (this.con !== null && this.con !== undefined) {
    output.writeFieldBegin('con', Thrift.Type.STRUCT, 1);
    this.con.write(output);
    output.writeFieldEnd();
  }
  if (this.url !== null && this.url !== undefined) {
    output.writeFieldBegin('url', Thrift.Type.STRING, 2);
    output.writeString(this.url);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

DataHub_load_result = function(args) {
  this.success = null;
  this.ex = null;
  if (args instanceof DHException) {
    this.ex = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.ex !== undefined) {
      this.ex = args.ex;
    }
  }
};
DataHub_load_result.prototype = {};
DataHub_load_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new DHQueryResult();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ex = new DHException();
        this.ex.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

DataHub_load_result.prototype.write = function(output) {
  output.writeStructBegin('DataHub_load_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.ex !== null && this.ex !== undefined) {
    output.writeFieldBegin('ex', Thrift.Type.STRUCT, 1);
    this.ex.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

DataHubClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
DataHubClient.prototype = {};
DataHubClient.prototype.get_version = function() {
  this.send_get_version();
  return this.recv_get_version();
};

DataHubClient.prototype.send_get_version = function() {
  this.output.writeMessageBegin('get_version', Thrift.MessageType.CALL, this.seqid);
  var args = new DataHub_get_version_args();
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush();
};

DataHubClient.prototype.recv_get_version = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new DataHub_get_version_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'get_version failed: unknown result';
};
DataHubClient.prototype.connect = function(con_params) {
  this.send_connect(con_params);
  return this.recv_connect();
};

DataHubClient.prototype.send_connect = function(con_params) {
  this.output.writeMessageBegin('connect', Thrift.MessageType.CALL, this.seqid);
  var args = new DataHub_connect_args();
  args.con_params = con_params;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush();
};

DataHubClient.prototype.recv_connect = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new DataHub_connect_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.ex) {
    throw result.ex;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'connect failed: unknown result';
};
DataHubClient.prototype.list_repos = function(con) {
  this.send_list_repos(con);
  return this.recv_list_repos();
};

DataHubClient.prototype.send_list_repos = function(con) {
  this.output.writeMessageBegin('list_repos', Thrift.MessageType.CALL, this.seqid);
  var args = new DataHub_list_repos_args();
  args.con = con;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush();
};

DataHubClient.prototype.recv_list_repos = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new DataHub_list_repos_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.ex) {
    throw result.ex;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'list_repos failed: unknown result';
};
DataHubClient.prototype.list_tables = function(con, repo) {
  this.send_list_tables(con, repo);
  return this.recv_list_tables();
};

DataHubClient.prototype.send_list_tables = function(con, repo) {
  this.output.writeMessageBegin('list_tables', Thrift.MessageType.CALL, this.seqid);
  var args = new DataHub_list_tables_args();
  args.con = con;
  args.repo = repo;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush();
};

DataHubClient.prototype.recv_list_tables = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new DataHub_list_tables_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.ex) {
    throw result.ex;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'list_tables failed: unknown result';
};
DataHubClient.prototype.execute_sql = function(con, query, query_params) {
  this.send_execute_sql(con, query, query_params);
  return this.recv_execute_sql();
};

DataHubClient.prototype.send_execute_sql = function(con, query, query_params) {
  this.output.writeMessageBegin('execute_sql', Thrift.MessageType.CALL, this.seqid);
  var args = new DataHub_execute_sql_args();
  args.con = con;
  args.query = query;
  args.query_params = query_params;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush();
};

DataHubClient.prototype.recv_execute_sql = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new DataHub_execute_sql_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.ex) {
    throw result.ex;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'execute_sql failed: unknown result';
};
DataHubClient.prototype.load = function(con, url) {
  this.send_load(con, url);
  return this.recv_load();
};

DataHubClient.prototype.send_load = function(con, url) {
  this.output.writeMessageBegin('load', Thrift.MessageType.CALL, this.seqid);
  var args = new DataHub_load_args();
  args.con = con;
  args.url = url;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush();
};

DataHubClient.prototype.recv_load = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new DataHub_load_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.ex) {
    throw result.ex;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'load failed: unknown result';
};