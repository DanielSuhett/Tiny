import { OutputCreateUrl } from 'src/usecases/url/create/create.url.dto';
import { Url } from 'src/domain/entities/url.entities';
import { IUrlRepository } from 'src/domain/repositories/url.repository.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UrlRepository implements IUrlRepository {
  constructor(
    @InjectRepository(Url)
    private userModel: Repository<Url>,
  ) {}

  async insertOne(url: Url): Promise<OutputCreateUrl | null> {
    if (!url) {
      return null;
    }
    const result = await this.userModel.save(url);

    if (!result) {
      return null;
    }

    return {
      expiresAt: result.expiresAt,
      shortcut: result.shortcut,
    };
  }

  async findOne(shortcut: string): Promise<Url | null> {
    if (!shortcut) {
      return null;
    }

    const result = await this.userModel.findOne({ where: { shortcut } });

    if (!result) {
      return null;
    }

    return result;
  }

  async findMany(
    field: string,
    value: string | number | boolean,
  ): Promise<Url[]> {
    if (!field || !value) {
      return null;
    }

    const result = await this.userModel.find({ where: { [field]: value } });

    if (!result) {
      return null;
    }

    return result;
  }

  async deleteOne(id: number): Promise<boolean> {
    if (!id) {
      return null;
    }

    const result = await this.userModel.delete({ id });

    return !!result.affected;
  }
}
