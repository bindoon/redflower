create database redflower;

-- 任务池子 --
create table t_taskpool (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `desc` varchar(512) NOT NULL,
  `clock` datetime,
  `createdAt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `updatedAt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

-- 每个用户的任务池子 --
create table t_usertask (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `desc` varchar(512) NOT NULL,
  `pic` varchar(256) NOT NULL,
  `clock` datetime,
  `createdAt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `updatedAt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

create table t_user (
    `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
    `email` varchar(128) NOT NULL,
    `username` varchar(256) NOT NULL,
    `password` char(128) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '创建时间',
  `updatedAt` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' COMMENT '更新时间',
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=UTF8;
