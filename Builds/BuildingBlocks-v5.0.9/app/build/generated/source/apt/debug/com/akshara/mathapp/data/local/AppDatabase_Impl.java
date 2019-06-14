package com.akshara.mathapp.data.local;

import android.arch.persistence.db.SupportSQLiteDatabase;
import android.arch.persistence.db.SupportSQLiteOpenHelper;
import android.arch.persistence.db.SupportSQLiteOpenHelper.Callback;
import android.arch.persistence.db.SupportSQLiteOpenHelper.Configuration;
import android.arch.persistence.room.DatabaseConfiguration;
import android.arch.persistence.room.InvalidationTracker;
import android.arch.persistence.room.RoomOpenHelper;
import android.arch.persistence.room.RoomOpenHelper.Delegate;
import android.arch.persistence.room.util.TableInfo;
import android.arch.persistence.room.util.TableInfo.Column;
import android.arch.persistence.room.util.TableInfo.ForeignKey;
import android.arch.persistence.room.util.TableInfo.Index;
import java.lang.IllegalStateException;
import java.lang.Override;
import java.lang.String;
import java.util.HashMap;
import java.util.HashSet;

public class AppDatabase_Impl extends AppDatabase {
  private volatile UserDao _userDao;

  protected SupportSQLiteOpenHelper createOpenHelper(DatabaseConfiguration configuration) {
    final SupportSQLiteOpenHelper.Callback _openCallback = new RoomOpenHelper(configuration, new RoomOpenHelper.Delegate(1) {
      public void createAllTables(SupportSQLiteDatabase _db) {
        _db.execSQL("CREATE TABLE IF NOT EXISTS `User` (`id` INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, `uid` TEXT, `name` TEXT, `phone` TEXT, `age` TEXT, `grade` TEXT, `school_type` TEXT, `language` TEXT, `gender` TEXT, `avatar_pic_local` TEXT)");
        _db.execSQL("CREATE TABLE IF NOT EXISTS room_master_table (id INTEGER PRIMARY KEY,identity_hash TEXT)");
        _db.execSQL("INSERT OR REPLACE INTO room_master_table (id,identity_hash) VALUES(42, \"b25a441ebf6819e62a36bab12d952cf4\")");
      }

      public void dropAllTables(SupportSQLiteDatabase _db) {
        _db.execSQL("DROP TABLE IF EXISTS `User`");
      }

      protected void onCreate(SupportSQLiteDatabase _db) {
        if (mCallbacks != null) {
          for (int _i = 0, _size = mCallbacks.size(); _i < _size; _i++) {
            mCallbacks.get(_i).onCreate(_db);
          }
        }
      }

      public void onOpen(SupportSQLiteDatabase _db) {
        mDatabase = _db;
        internalInitInvalidationTracker(_db);
        if (mCallbacks != null) {
          for (int _i = 0, _size = mCallbacks.size(); _i < _size; _i++) {
            mCallbacks.get(_i).onOpen(_db);
          }
        }
      }

      protected void validateMigration(SupportSQLiteDatabase _db) {
        final HashMap<String, TableInfo.Column> _columnsUser = new HashMap<String, TableInfo.Column>(10);
        _columnsUser.put("id", new TableInfo.Column("id", "INTEGER", true, 1));
        _columnsUser.put("uid", new TableInfo.Column("uid", "TEXT", false, 0));
        _columnsUser.put("name", new TableInfo.Column("name", "TEXT", false, 0));
        _columnsUser.put("phone", new TableInfo.Column("phone", "TEXT", false, 0));
        _columnsUser.put("age", new TableInfo.Column("age", "TEXT", false, 0));
        _columnsUser.put("grade", new TableInfo.Column("grade", "TEXT", false, 0));
        _columnsUser.put("school_type", new TableInfo.Column("school_type", "TEXT", false, 0));
        _columnsUser.put("language", new TableInfo.Column("language", "TEXT", false, 0));
        _columnsUser.put("gender", new TableInfo.Column("gender", "TEXT", false, 0));
        _columnsUser.put("avatar_pic_local", new TableInfo.Column("avatar_pic_local", "TEXT", false, 0));
        final HashSet<TableInfo.ForeignKey> _foreignKeysUser = new HashSet<TableInfo.ForeignKey>(0);
        final HashSet<TableInfo.Index> _indicesUser = new HashSet<TableInfo.Index>(0);
        final TableInfo _infoUser = new TableInfo("User", _columnsUser, _foreignKeysUser, _indicesUser);
        final TableInfo _existingUser = TableInfo.read(_db, "User");
        if (! _infoUser.equals(_existingUser)) {
          throw new IllegalStateException("Migration didn't properly handle User(com.akshara.mathapp.data.local.User).\n"
                  + " Expected:\n" + _infoUser + "\n"
                  + " Found:\n" + _existingUser);
        }
      }
    }, "b25a441ebf6819e62a36bab12d952cf4");
    final SupportSQLiteOpenHelper.Configuration _sqliteConfig = SupportSQLiteOpenHelper.Configuration.builder(configuration.context)
        .name(configuration.name)
        .callback(_openCallback)
        .build();
    final SupportSQLiteOpenHelper _helper = configuration.sqliteOpenHelperFactory.create(_sqliteConfig);
    return _helper;
  }

  @Override
  protected InvalidationTracker createInvalidationTracker() {
    return new InvalidationTracker(this, "User");
  }

  @Override
  public UserDao userDao() {
    if (_userDao != null) {
      return _userDao;
    } else {
      synchronized(this) {
        if(_userDao == null) {
          _userDao = new UserDao_Impl(this);
        }
        return _userDao;
      }
    }
  }
}
