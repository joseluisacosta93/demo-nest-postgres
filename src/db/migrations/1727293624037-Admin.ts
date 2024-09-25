import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class Admin1727293624037 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.createTable(
      new Table({
        name: 'admin',
        columns: [
          new TableColumn({
            name: 'id',
            type: 'int',
            isNullable: false,
            isPrimary: true,
            generationStrategy: 'increment',
          }),
          new TableColumn({
            name: 'name',
            type: 'varchar',
            length: '255',
            isNullable: false,
          }),
          new TableColumn({
            name: 'lastName',
            type: 'varchar',
            length: '255',
            isNullable: false,
          }),

          new TableColumn({
            name: 'orgId',
            type: 'int',
            isNullable: false,
          }),

          new TableColumn({
            name: 'orgName',
            type: 'varchar',
            length: '255',
            isNullable: false,
          }),
          new TableColumn({
            name: 'email',
            type: 'varchar',
            length: '255',
            isNullable: false,
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    return queryRunner.dropTable('admin');
  }
}
