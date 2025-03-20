import { Request, Response } from 'express';
import { validateOrReject } from 'class-validator';

import { AppDataSource } from '../../data-source';
import { Track } from '../../entities/Track';
import { ResponseUtil } from '../../utils/Response';
import { Paginator } from '../../utils/Paginator';
import { CreateTrackDTO, UpdateTrackDTO } from '../dtos/TrackDTO';


export class TracksController {
  async getTracks(req: Request, res: Response): Promise<Response> {
    const builder = await AppDataSource.getRepository(Track).createQueryBuilder().orderBy('id', 'DESC');
    const { records: tracks, paginationInfo } = await Paginator.paginate(builder, req);
    const tracksData = tracks.map((track: Track) => {
      return track.toResponse();
    });
    return ResponseUtil.sendResponse(res, 'Fetched tracks successfully', tracksData, paginationInfo);
  }

  async getTrack(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const track = await AppDataSource.getRepository(Track).findOneByOrFail({
      id: Number(id),
    });

    return ResponseUtil.sendResponse<Track>(res, 'Fetch track successfully', track.toResponse());
  }

  async create(req: Request, res: Response): Promise<Response> {
    const trackData = req.body;

    const dto = new CreateTrackDTO();
    Object.assign(dto, trackData);

    await validateOrReject(dto);

    const repo = AppDataSource.getRepository(Track);
    const track = repo.create(trackData);
    await repo.save(track);

    return ResponseUtil.sendResponse(res, 'Successfully created new track', track, null, 200);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const trackData = req.body;

    const dto = new UpdateTrackDTO();
    Object.assign(dto, trackData);
    dto.id = parseInt(id);

    await validateOrReject(dto);

    const repo = AppDataSource.getRepository(Track);

    const track = await repo.findOneByOrFail({
      id: Number(id),
    });

    repo.merge(track, trackData);
    await repo.save(track);
    return ResponseUtil.sendResponse(res, 'Successfully updated the track', track.toResponse());
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const repo = AppDataSource.getRepository(Track);
    const track = await repo.findOneByOrFail({
      id: Number(id),
    });
    await repo.remove(track);
    return ResponseUtil.sendResponse(res, 'Successfully deleted the track', null);
  }
}
