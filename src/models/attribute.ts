import { Injectable } from '@angular/core';

import { Model } from '../models/model';
import { Form } from '../models/form';

import { Table } from '../decorators/table';
import { Column } from '../decorators/column';

@Injectable()
@Table("attributes")
export class Attribute extends Model {

  constructor(values:any=null) {
    super(values);
    this.copyInto(values);
  }

  public newInstance<M extends Attribute>(values:any=null) : Attribute {
    return new Attribute(values);
  }

  @Column("id", "INTEGER", true)
  public id: number = null;

  @Column("deployment_id", "INTEGER", true)
  public deployment_id: number = null;

  @Column("form_id", "INTEGER")
  public form_id: number = null;

  @Column("key", "TEXT")
  public key: string = null;

  @Column("label", "TEXT")
  public label: string = null;

  @Column("instructions", "TEXT")
  public instructions: string = null;

  @Column("input", "TEXT")
  public input: string = null;

  @Column("type", "TEXT")
  public type: string = null;

  @Column("required", "TEXT")
  public required: boolean = null;

  @Column("priority", "INTEGER")
  public priority: number = null;

  @Column("cardinality", "INTEGER")
  public cardinality: number = null;

  @Column("options", "TEXT")
  public options: string = null;

}