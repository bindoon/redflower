create database redflower;
use redflower;

-- 任务池子 --
create table t_taskpool (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `desc` varchar(512) NOT NULL,
  `alarm` char(16) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `updatedAt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

-- 每个用户的任务池子 --
create table t_usertask (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `taskid` int(11)  unsigned NOT NULL ,
  `userid` varchar(128)   NOT NULL,
  `desc` varchar(512) NOT NULL,
  `pic`  varchar(256) NOT NULL,
  `alarm` char(16) NOT NULL,
  `private` smallint default 0,
  `createdAt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `updatedAt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '更新时间',
  PRIMARY KEY (`id`),
  unique key (`taskid`,`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

-- 心得 --
create table t_thought (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `taskid` int(11)  unsigned NOT NULL ,
  `userid` varchar(128)   NOT NULL,
  `content` text NOT NULL,
  `pics` varchar(2048) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `updatedAt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

-- 心得 --
create table t_checkin (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `taskid` int(11)  unsigned NOT NULL ,
  `userid` varchar(128)   NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `updatedAt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;


create table t_user (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `email` varchar(128) NOT NULL,
    `username` varchar(256) NOT NULL,
    `password` char(128) NOT NULL,
    `pic` varchar(256) NOT NULL,
    `gender` smallint NOT NULL default 0,
  `createdAt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `updatedAt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '更新时间',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;
