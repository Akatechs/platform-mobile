import { Injectable } from '@angular/core';

import { Table } from '../decorators/table';
import { Column } from '../decorators/column';

import { Model, TEXT, INTEGER, BOOLEAN, PRIMARY_KEY } from '../models/model';

@Injectable()
@Table("images")
export class Image extends Model {

  constructor(values:any=null) {
    super(values);
    this.copyInto(values);
  }

  public newInstance<M extends Image>(values:any=null) : Image {
    return new Image(values);
  }

  @Column("id", INTEGER, PRIMARY_KEY)
  public id: number = null;

  @Column("deployment_id", INTEGER, PRIMARY_KEY)
  public deployment_id: number = null;

  @Column("post_id", INTEGER)
  public post_id: number = null;

  @Column("user_id", INTEGER)
  public user_id: number = null;

  @Column("url", TEXT)
  public url: string = null;

  @Column("mime", TEXT)
  public mime: string = null;

  @Column("caption", TEXT)
  public caption: string = null;

  @Column("filesize", INTEGER)
  public filesize: number = null;

  @Column("width", INTEGER)
  public width: number = null;

  @Column("height", INTEGER)
  public height: number = null;

  @Column("created", TEXT)
  public created: Date = null;

  @Column("updated", TEXT)
  public updated: Date = null;

  @Column("saved", TEXT)
  public saved: Date = null;

  @Column("can_read", BOOLEAN)
  public can_read: boolean = null;

  @Column("can_create", BOOLEAN)
  public can_create: boolean = null;

  @Column("can_update", BOOLEAN)
  public can_update: boolean = null;

  @Column("can_delete", BOOLEAN)
  public can_delete: boolean = null;

}
