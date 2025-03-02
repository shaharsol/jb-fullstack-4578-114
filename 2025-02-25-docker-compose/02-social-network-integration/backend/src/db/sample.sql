SELECT
    `User`.`id`,
    `User`.`name`,
    `User`.`username`,
    `User`.`password`,
    `User`.`created_at` AS `createdAt`,
    `User`.`updated_at` AS `updatedAt`,
    `followers`.`id` AS `followers.id`,
    `followers`.`name` AS `followers.name`,
    `followers`.`username` AS `followers.username`,
    `followers`.`password` AS `followers.password`,
    `followers`.`created_at` AS `followers.createdAt`,
    `followers`.`updated_at` AS `followers.updatedAt`,
    `followers->Follow`.`follower_id` AS `followers.Follow.followerId`,
    `followers->Follow`.`followee_id` AS `followers.Follow.followeeId`,
    `followers->Follow`.`created_at` AS `followers.Follow.createdAt`,
    `followers->Follow`.`updated_at` AS `followers.Follow.updatedAt`
FROM
    `users` AS `User`
    LEFT OUTER JOIN (
        `follows` AS `followers->Follow`
        INNER JOIN `users` AS `followers` ON `followers`.`id` = `followers->Follow`.`follower_id`
    ) ON `User`.`id` = `followers->Follow`.`followee_id`
WHERE
    `User`.`id` = '1230ae30-dc4f-4752-bd84-092956f5c633'
ORDER BY
    `User`.`name` ASC;