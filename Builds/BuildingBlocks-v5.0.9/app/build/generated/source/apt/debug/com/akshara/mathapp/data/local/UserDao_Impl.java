package com.akshara.mathapp.data.local;

import android.arch.persistence.db.SupportSQLiteStatement;
import android.arch.persistence.room.EntityDeletionOrUpdateAdapter;
import android.arch.persistence.room.EntityInsertionAdapter;
import android.arch.persistence.room.RoomDatabase;
import android.arch.persistence.room.RoomSQLiteQuery;
import android.database.Cursor;
import java.lang.Override;
import java.lang.String;
import java.util.ArrayList;
import java.util.List;

public class UserDao_Impl implements UserDao {
  private final RoomDatabase __db;

  private final EntityInsertionAdapter __insertionAdapterOfUser;

  private final EntityDeletionOrUpdateAdapter __deletionAdapterOfUser;

  private final EntityDeletionOrUpdateAdapter __updateAdapterOfUser;

  public UserDao_Impl(RoomDatabase __db) {
    this.__db = __db;
    this.__insertionAdapterOfUser = new EntityInsertionAdapter<User>(__db) {
      @Override
      public String createQuery() {
        return "INSERT OR ABORT INTO `User`(`id`,`uid`,`name`,`phone`,`age`,`grade`,`school_type`,`language`,`gender`,`avatar_pic_local`) VALUES (nullif(?, 0),?,?,?,?,?,?,?,?,?)";
      }

      @Override
      public void bind(SupportSQLiteStatement stmt, User value) {
        stmt.bindLong(1, value.getId());
        if (value.getUid() == null) {
          stmt.bindNull(2);
        } else {
          stmt.bindString(2, value.getUid());
        }
        if (value.getName() == null) {
          stmt.bindNull(3);
        } else {
          stmt.bindString(3, value.getName());
        }
        if (value.getPhoneNumber() == null) {
          stmt.bindNull(4);
        } else {
          stmt.bindString(4, value.getPhoneNumber());
        }
        if (value.getAge() == null) {
          stmt.bindNull(5);
        } else {
          stmt.bindString(5, value.getAge());
        }
        if (value.getGrade() == null) {
          stmt.bindNull(6);
        } else {
          stmt.bindString(6, value.getGrade());
        }
        if (value.getSchoolType() == null) {
          stmt.bindNull(7);
        } else {
          stmt.bindString(7, value.getSchoolType());
        }
        if (value.getLanguage() == null) {
          stmt.bindNull(8);
        } else {
          stmt.bindString(8, value.getLanguage());
        }
        if (value.getGender() == null) {
          stmt.bindNull(9);
        } else {
          stmt.bindString(9, value.getGender());
        }
        if (value.getAvatarPicLocalPath() == null) {
          stmt.bindNull(10);
        } else {
          stmt.bindString(10, value.getAvatarPicLocalPath());
        }
      }
    };
    this.__deletionAdapterOfUser = new EntityDeletionOrUpdateAdapter<User>(__db) {
      @Override
      public String createQuery() {
        return "DELETE FROM `User` WHERE `id` = ?";
      }

      @Override
      public void bind(SupportSQLiteStatement stmt, User value) {
        stmt.bindLong(1, value.getId());
      }
    };
    this.__updateAdapterOfUser = new EntityDeletionOrUpdateAdapter<User>(__db) {
      @Override
      public String createQuery() {
        return "UPDATE OR ABORT `User` SET `id` = ?,`uid` = ?,`name` = ?,`phone` = ?,`age` = ?,`grade` = ?,`school_type` = ?,`language` = ?,`gender` = ?,`avatar_pic_local` = ? WHERE `id` = ?";
      }

      @Override
      public void bind(SupportSQLiteStatement stmt, User value) {
        stmt.bindLong(1, value.getId());
        if (value.getUid() == null) {
          stmt.bindNull(2);
        } else {
          stmt.bindString(2, value.getUid());
        }
        if (value.getName() == null) {
          stmt.bindNull(3);
        } else {
          stmt.bindString(3, value.getName());
        }
        if (value.getPhoneNumber() == null) {
          stmt.bindNull(4);
        } else {
          stmt.bindString(4, value.getPhoneNumber());
        }
        if (value.getAge() == null) {
          stmt.bindNull(5);
        } else {
          stmt.bindString(5, value.getAge());
        }
        if (value.getGrade() == null) {
          stmt.bindNull(6);
        } else {
          stmt.bindString(6, value.getGrade());
        }
        if (value.getSchoolType() == null) {
          stmt.bindNull(7);
        } else {
          stmt.bindString(7, value.getSchoolType());
        }
        if (value.getLanguage() == null) {
          stmt.bindNull(8);
        } else {
          stmt.bindString(8, value.getLanguage());
        }
        if (value.getGender() == null) {
          stmt.bindNull(9);
        } else {
          stmt.bindString(9, value.getGender());
        }
        if (value.getAvatarPicLocalPath() == null) {
          stmt.bindNull(10);
        } else {
          stmt.bindString(10, value.getAvatarPicLocalPath());
        }
        stmt.bindLong(11, value.getId());
      }
    };
  }

  @Override
  public void insertAll(User... users) {
    __db.beginTransaction();
    try {
      __insertionAdapterOfUser.insert(users);
      __db.setTransactionSuccessful();
    } finally {
      __db.endTransaction();
    }
  }

  @Override
  public void delete(User user) {
    __db.beginTransaction();
    try {
      __deletionAdapterOfUser.handle(user);
      __db.setTransactionSuccessful();
    } finally {
      __db.endTransaction();
    }
  }

  @Override
  public void updateUsers(User... users) {
    __db.beginTransaction();
    try {
      __updateAdapterOfUser.handleMultiple(users);
      __db.setTransactionSuccessful();
    } finally {
      __db.endTransaction();
    }
  }

  @Override
  public List<User> getAll() {
    final String _sql = "SELECT * FROM user";
    final RoomSQLiteQuery _statement = RoomSQLiteQuery.acquire(_sql, 0);
    final Cursor _cursor = __db.query(_statement);
    try {
      final int _cursorIndexOfId = _cursor.getColumnIndexOrThrow("id");
      final int _cursorIndexOfUid = _cursor.getColumnIndexOrThrow("uid");
      final int _cursorIndexOfName = _cursor.getColumnIndexOrThrow("name");
      final int _cursorIndexOfPhoneNumber = _cursor.getColumnIndexOrThrow("phone");
      final int _cursorIndexOfAge = _cursor.getColumnIndexOrThrow("age");
      final int _cursorIndexOfGrade = _cursor.getColumnIndexOrThrow("grade");
      final int _cursorIndexOfSchoolType = _cursor.getColumnIndexOrThrow("school_type");
      final int _cursorIndexOfLanguage = _cursor.getColumnIndexOrThrow("language");
      final int _cursorIndexOfGender = _cursor.getColumnIndexOrThrow("gender");
      final int _cursorIndexOfAvatarPicLocalPath = _cursor.getColumnIndexOrThrow("avatar_pic_local");
      final List<User> _result = new ArrayList<User>(_cursor.getCount());
      while(_cursor.moveToNext()) {
        final User _item;
        _item = new User();
        final int _tmpId;
        _tmpId = _cursor.getInt(_cursorIndexOfId);
        _item.setId(_tmpId);
        final String _tmpUid;
        _tmpUid = _cursor.getString(_cursorIndexOfUid);
        _item.setUid(_tmpUid);
        final String _tmpName;
        _tmpName = _cursor.getString(_cursorIndexOfName);
        _item.setName(_tmpName);
        final String _tmpPhoneNumber;
        _tmpPhoneNumber = _cursor.getString(_cursorIndexOfPhoneNumber);
        _item.setPhoneNumber(_tmpPhoneNumber);
        final String _tmpAge;
        _tmpAge = _cursor.getString(_cursorIndexOfAge);
        _item.setAge(_tmpAge);
        final String _tmpGrade;
        _tmpGrade = _cursor.getString(_cursorIndexOfGrade);
        _item.setGrade(_tmpGrade);
        final String _tmpSchoolType;
        _tmpSchoolType = _cursor.getString(_cursorIndexOfSchoolType);
        _item.setSchoolType(_tmpSchoolType);
        final String _tmpLanguage;
        _tmpLanguage = _cursor.getString(_cursorIndexOfLanguage);
        _item.setLanguage(_tmpLanguage);
        final String _tmpGender;
        _tmpGender = _cursor.getString(_cursorIndexOfGender);
        _item.setGender(_tmpGender);
        final String _tmpAvatarPicLocalPath;
        _tmpAvatarPicLocalPath = _cursor.getString(_cursorIndexOfAvatarPicLocalPath);
        _item.setAvatarPicLocalPath(_tmpAvatarPicLocalPath);
        _result.add(_item);
      }
      return _result;
    } finally {
      _cursor.close();
      _statement.release();
    }
  }

  @Override
  public User findBySignInCred(String name, String phone) {
    final String _sql = "SELECT * FROM user WHERE name LIKE ? AND phone LIKE ? LIMIT 1";
    final RoomSQLiteQuery _statement = RoomSQLiteQuery.acquire(_sql, 2);
    int _argIndex = 1;
    if (name == null) {
      _statement.bindNull(_argIndex);
    } else {
      _statement.bindString(_argIndex, name);
    }
    _argIndex = 2;
    if (phone == null) {
      _statement.bindNull(_argIndex);
    } else {
      _statement.bindString(_argIndex, phone);
    }
    final Cursor _cursor = __db.query(_statement);
    try {
      final int _cursorIndexOfId = _cursor.getColumnIndexOrThrow("id");
      final int _cursorIndexOfUid = _cursor.getColumnIndexOrThrow("uid");
      final int _cursorIndexOfName = _cursor.getColumnIndexOrThrow("name");
      final int _cursorIndexOfPhoneNumber = _cursor.getColumnIndexOrThrow("phone");
      final int _cursorIndexOfAge = _cursor.getColumnIndexOrThrow("age");
      final int _cursorIndexOfGrade = _cursor.getColumnIndexOrThrow("grade");
      final int _cursorIndexOfSchoolType = _cursor.getColumnIndexOrThrow("school_type");
      final int _cursorIndexOfLanguage = _cursor.getColumnIndexOrThrow("language");
      final int _cursorIndexOfGender = _cursor.getColumnIndexOrThrow("gender");
      final int _cursorIndexOfAvatarPicLocalPath = _cursor.getColumnIndexOrThrow("avatar_pic_local");
      final User _result;
      if(_cursor.moveToFirst()) {
        _result = new User();
        final int _tmpId;
        _tmpId = _cursor.getInt(_cursorIndexOfId);
        _result.setId(_tmpId);
        final String _tmpUid;
        _tmpUid = _cursor.getString(_cursorIndexOfUid);
        _result.setUid(_tmpUid);
        final String _tmpName;
        _tmpName = _cursor.getString(_cursorIndexOfName);
        _result.setName(_tmpName);
        final String _tmpPhoneNumber;
        _tmpPhoneNumber = _cursor.getString(_cursorIndexOfPhoneNumber);
        _result.setPhoneNumber(_tmpPhoneNumber);
        final String _tmpAge;
        _tmpAge = _cursor.getString(_cursorIndexOfAge);
        _result.setAge(_tmpAge);
        final String _tmpGrade;
        _tmpGrade = _cursor.getString(_cursorIndexOfGrade);
        _result.setGrade(_tmpGrade);
        final String _tmpSchoolType;
        _tmpSchoolType = _cursor.getString(_cursorIndexOfSchoolType);
        _result.setSchoolType(_tmpSchoolType);
        final String _tmpLanguage;
        _tmpLanguage = _cursor.getString(_cursorIndexOfLanguage);
        _result.setLanguage(_tmpLanguage);
        final String _tmpGender;
        _tmpGender = _cursor.getString(_cursorIndexOfGender);
        _result.setGender(_tmpGender);
        final String _tmpAvatarPicLocalPath;
        _tmpAvatarPicLocalPath = _cursor.getString(_cursorIndexOfAvatarPicLocalPath);
        _result.setAvatarPicLocalPath(_tmpAvatarPicLocalPath);
      } else {
        _result = null;
      }
      return _result;
    } finally {
      _cursor.close();
      _statement.release();
    }
  }
}
