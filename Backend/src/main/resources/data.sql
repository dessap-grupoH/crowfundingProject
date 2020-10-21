CREATE TABLE IF NOT EXISTS  `town`
(
    `id` INT PRIMARY KEY NOT NULL,
    `name` VARCHAR(45) NOT NULL,
    `province` VARCHAR(45) NOT NULL,
    `population` INT NOT NULL,
    `connection_state` VARCHAR(45) NOT NULL
);

CREATE TABLE IF NOT EXISTS  `user`
(
    `user_id` INT PRIMARY KEY NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `password` VARCHAR(45) NOT NULL,
    `username` VARCHAR(45) NOT NULL,
    `actual_points` INT NOT NULL,
    `nick` VARCHAR(45) NOT NULL
);

CREATE TABLE IF NOT EXISTS  `crowdFundingProject`
(
    `id`                    INT PRIMARY KEY NOT NULL,
    `estimated_finish_date` date                    NOT NULL,
    `money_collected`       int                     NOT NULL,
    `name`                  varchar(45)             NOT NULL,
    `percentage_needed`     int                     NOT NULL,
    `price_per_inhabitant`  int                     NOT NULL,
    `project_state`         varchar(45)             NOT NULL,
    `start_date`            date                    NOT NULL,
    `place_to_connect_id`   INT  NOT NULL
);

ALTER TABLE crowdFundingProject
    ADD FOREIGN KEY (place_to_connect_id)
        REFERENCES `town`(id);

CREATE TABLE IF NOT EXISTS  `donation`
(
    `id` INT PRIMARY KEY NOT NULL,
    `amount` INT NOT NULL,
    `comment` VARCHAR(45) NOT NULL,
    `payment_method` VARCHAR(45) NOT NULL,
    `date` DATE NOT NULL,
    `from_id` INT NOT NULL,
    `project_to_id` INT NOT NULL
);


ALTER TABLE donation
    ADD FOREIGN KEY (project_to_id)
        REFERENCES `crowdFundingProject`(`id`);

ALTER TABLE donation
    ADD FOREIGN KEY (from_id)
        REFERENCES `user`(`user_id`);

INSERT INTO `town`(`id`, `name`, `province`, `population`, `connection_state`) VALUES (1, 'Pergamino', 'Buenos Aires', 4000, 'Disconnected');
INSERT INTO `town`(`id`, `name`, `province`, `population`, `connection_state`) VALUES (2, 'Carmen de Patagones', 'Buenos Aires', 11000, 'Disconnected');
INSERT INTO `town`(`id`, `name`, `province`, `population`, `connection_state`) VALUES (3, 'Tandil', 'Buenos Aires', 32000, 'Disconnected');
INSERT INTO `town`(`id`, `name`, `province`, `population`, `connection_state`) VALUES (4, 'Tres Arroyos', 'Buenos Aires', 22000, 'Disconnected');
INSERT INTO `town`(`id`, `name`, `province`, `population`, `connection_state`) VALUES (5, '30 de agosto', 'Entre Rios', 22000, 'Disconnected');
INSERT INTO `town`(`id`, `name`, `province`, `population`, `connection_state`) VALUES (6, 'Sierra Leona', 'Cordoba', 22000, 'Disconnected');
INSERT INTO `town`(`id`, `name`, `province`, `population`, `connection_state`) VALUES (7, 'El Malantial', 'Chaco', 22000, 'Disconnected');

INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `actual_points`, `nick`) VALUES (1, 'ricardo@gmail.com', '123', 'ricardo', '250', 'ricX');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `actual_points`, `nick`) VALUES (2, 'lucas@gmail.com', '123', 'lucas', '100', 'randomize');
INSERT INTO `user` (`user_id`, `email`, `password`, `username`, `actual_points`, `nick`) VALUES (3, 'rodrigo@gmail.com', '123', 'rodrigo', '1250', 'rodx1');


INSERT INTO `crowdFundingProject`(`id`, `estimated_finish_date`, `money_collected`, `name`, `percentage_needed`,
                                  `price_per_inhabitant`, `project_state`,`start_date`, `place_to_connect_id`) VALUES (1, '2020-11-19', 10000, 'Proyecto pergaminense', 80, 1500, 'Opened' , '2020-01-19',1);
INSERT INTO `crowdFundingProject`(`id`, `estimated_finish_date`, `money_collected`, `name`, `percentage_needed`,
                                  `price_per_inhabitant`, `project_state`,`start_date`, `place_to_connect_id`) VALUES (2, '2020-10-19', 12000, 'Proyecto patagonense', 79, 1500, 'Opened' , '2019-12-19',2);
INSERT INTO `crowdFundingProject`(`id`, `estimated_finish_date`, `money_collected`, `name`, `percentage_needed`,
                                  `price_per_inhabitant`, `project_state`,`start_date`, `place_to_connect_id`) VALUES (3, '2020-09-19', 13000, 'Proyecto tandilense', 78, 1500, 'Opened' , '2019-11-19',3);
INSERT INTO `crowdFundingProject`(`id`, `estimated_finish_date`, `money_collected`, `name`, `percentage_needed`,
                                  `price_per_inhabitant`, `project_state`,`start_date`, `place_to_connect_id`) VALUES (4, '2020-08-19', 14000, 'Proyecto arroyense', 77, 1500, 'Opened' , '2019-10-19',4);
INSERT INTO `crowdFundingProject`(`id`, `estimated_finish_date`, `money_collected`, `name`, `percentage_needed`,
                                  `price_per_inhabitant`, `project_state`,`start_date`, `place_to_connect_id`) VALUES (5, '2020-07-19', 15000, 'Proyecto agostense', 76, 1500, 'Opened' , '2019-09-19',5);
INSERT INTO `crowdFundingProject`(`id`, `estimated_finish_date`, `money_collected`, `name`, `percentage_needed`,
                                  `price_per_inhabitant`, `project_state`,`start_date`, `place_to_connect_id`) VALUES (6, '2020-06-19', 16000, 'Proyecto leonense', 75, 1500, 'Opened' , '2019-08-19',6);
INSERT INTO `crowdFundingProject`(`id`, `estimated_finish_date`, `money_collected`, `name`, `percentage_needed`,
                                  `price_per_inhabitant`, `project_state`,`start_date`, `place_to_connect_id`) VALUES (7, '2020-05-19', 17000, 'Proyecto malantialense', 74, 1500, 'Opened' , '2019-07-19',7);



INSERT INTO `donation` (`id`, `amount`, `comment`, `date`, `payment_method`, `from_id`, `project_to_id`) VALUES (1, 4000, 'Ayudando con amor',  '2020-03-19','CreditCard', 1, 2 );
INSERT INTO `donation` (`id`, `amount`, `comment`, `date`, `payment_method`, `from_id`, `project_to_id`) VALUES (2, 6000, 'Ayudando con ganas', '2020-02-19', 'CreditCard', 2, 2 );
INSERT INTO `donation` (`id`, `amount`, `comment`, `date`, `payment_method`, `from_id`, `project_to_id`) VALUES (3, 5000, 'Ayudando con esperanza', '2020-01-19', 'CreditCard', 3, 3 );
INSERT INTO `donation` (`id`, `amount`, `comment`, `date`, `payment_method`, `from_id`, `project_to_id`) VALUES (4, 7000, 'Ayudando con dedicacion', '2020-04-19', 'CreditCard', 1, 4 );
INSERT INTO `donation` (`id`, `amount`, `comment`, `date`, `payment_method`, `from_id`, `project_to_id`) VALUES (5, 8000, 'Ayudando con fuerza', '2020-05-19', 'CreditCard', 2, 5 );





